import React, { useState, useEffect } from 'react';
import { 
  View, 
  Heading, 
  Button, 
  Card, 
  Flex, 
  Text, 
  TextAreaField,
  TextField,
  Rating,
  Badge,
  Divider,
  useBreakpointValue
} from '@aws-amplify/ui-react';
import { useNavigate } from 'react-router-dom';
import NavigationBar from '../components/Navbar';
import '../index.css';

function ReviewPage() {
  const navigate = useNavigate();
  const isMobile = useBreakpointValue({
    base: true,
    small: true,
    medium: false,
    large: false
  });

  // States for the review form
  const [name, setName] = useState('');
  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  // State for stored reviews
  const [reviews, setReviews] = useState([]);

  // Load reviews from localStorage on component mount
  useEffect(() => {
    const storedReviews = localStorage.getItem('userReviews');
    if (storedReviews) {
      setReviews(JSON.parse(storedReviews));
    }
  }, []);

  const goToHome = () => {
    navigate('/'); 
  };

  // Handle form submission
  const handleSubmitReview = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setErrorMessage('');
    
    // Form validation
    if (!name.trim()) {
      setErrorMessage('Please enter your name');
      setSubmitting(false);
      return;
    }
    
    if (rating === 0) {
      setErrorMessage('Please select a rating');
      setSubmitting(false);
      return;
    }
    
    if (!reviewText.trim()) {
      setErrorMessage('Please enter your review');
      setSubmitting(false);
      return;
    }
    
    // Create new review object with timestamp
    const newReview = {
      id: Date.now(),
      name,
      rating,
      text: reviewText,
      date: new Date().toISOString(),
      helpful: 0
    };
    
    // Add to reviews and save to localStorage
    const updatedReviews = [newReview, ...reviews];
    setReviews(updatedReviews);
    localStorage.setItem('userReviews', JSON.stringify(updatedReviews));
    
    // Reset form
    setName('');
    setRating(0);
    setReviewText('');
    setSubmitting(false);
    setSuccessMessage('Thank you for your review!');
    
    // Clear success message after 3 seconds
    setTimeout(() => {
      setSuccessMessage('');
    }, 3000);
  };

  // Format the date for display
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  // Handle marking a review as helpful
  const markAsHelpful = (reviewId) => {
    const updatedReviews = reviews.map(review => {
      if (review.id === reviewId) {
        return { ...review, helpful: review.helpful + 1 };
      }
      return review;
    });
    
    setReviews(updatedReviews);
    localStorage.setItem('userReviews', JSON.stringify(updatedReviews));
  };

  return (
    <View style={{ backgroundColor: '#350000', minHeight: '100vh' }}>
      <Button 
        variation="link"
        onClick={goToHome}
      >
        <h1 style={{ color: '#DE7C5A' }}>Womper</h1>
      </Button>
      <NavigationBar />
      
      <View padding="medium">
        {/* Page Header */}
        <Heading level={2} marginBottom="large" color="white" textAlign="center">
          Customer Reviews
        </Heading>
        
        {/* Submit Review Section */}
        <Card 
          variation="elevated" 
          padding="large" 
          marginBottom="large"
          borderRadius="large"
          backgroundColor="white"
        >
          <Heading level={3} marginBottom="medium" color="#B10F2E">Share Your Experience</Heading>
          
          {successMessage && (
            <Text 
              color="green" 
              fontSize="large" 
              fontWeight="bold" 
              backgroundColor="green.10" 
              padding="medium" 
              borderRadius="medium"
              marginBottom="medium"
              textAlign="center"
            >
              {successMessage}
            </Text>
          )}
          
          {errorMessage && (
            <Text 
              color="red" 
              backgroundColor="red.10" 
              padding="medium" 
              borderRadius="medium"
              marginBottom="medium"
            >
              {errorMessage}
            </Text>
          )}
          
          <form onSubmit={handleSubmitReview}>
            <Flex direction="column" gap="medium">
              <TextField
                label="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                isRequired={true}
              />
              
              <View>
                <Text as="label" marginBottom="xs" display="block" fontWeight="bold">
                  Rating
                </Text>
                <Flex direction="row">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Text 
                      key={star}
                      fontSize="2rem"
                      cursor="pointer"
                      onClick={() => setRating(star)}
                      color={rating >= star ? "#DE7C5A" : "gray"}
                      marginRight="0.5rem"
                    >
                      ★
                    </Text>
                  ))}
                </Flex>
                <Text fontSize="small" color="gray.60" marginTop="xs">
                  {rating > 0 ? `You selected ${rating} star${rating !== 1 ? 's' : ''}` : 'Click to rate'}
                </Text>
              </View>
              
              <TextAreaField
                label="Your Review"
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
                placeholder="Tell us about your experience with Womper"
                rows={5}
                isRequired={true}
              />
              
              <Button
                type="submit"
                variation="primary"
                backgroundColor="#B10F2E"
                isLoading={submitting}
                loadingText="Submitting..."
                isFullWidth={isMobile}
                alignSelf={isMobile ? "stretch" : "flex-start"}
                paddingX="large"
              >
                Submit Review
              </Button>
            </Flex>
          </form>
        </Card>
        
        {/* Reviews List */}
        <Heading level={3} marginBottom="medium" color="#DE7C5A">What Our Customers Say</Heading>
        
        {reviews.length === 0 ? (
          <Card 
            variation="elevated" 
            padding="large" 
            borderRadius="large"
            backgroundColor="white"
            marginBottom="large"
          >
            <Text textAlign="center" color="gray.80">
              Be the first to leave a review!
            </Text>
          </Card>
        ) : (
          <Flex direction="column" gap="medium" marginBottom="large">
            {reviews.map((review) => (
              <Card 
                key={review.id}
                variation="elevated" 
                padding="large" 
                borderRadius="large"
                backgroundColor="white"
              >
                <Flex direction="column" gap="medium">
                  <Flex justifyContent="space-between" alignItems="center" wrap="wrap">
                    <Heading level={5} color="#460000">{review.name}</Heading>
                    <Text fontSize="small" color="gray.60">{formatDate(review.date)}</Text>
                  </Flex>
                  
                  <Flex direction="row">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Text 
                        key={star}
                        fontSize="1.2rem"
                        color={review.rating >= star ? "#DE7C5A" : "gray"}
                        marginRight="0.25rem"
                      >
                        ★
                      </Text>
                    ))}
                  </Flex>
                  
                  <Text>{review.text}</Text>
                  
                  <Divider marginY="xs" />
                  
                  <Flex justifyContent="space-between" alignItems="center">
                    <Button 
                      variation="link" 
                      size="small" 
                      color="#B10F2E"
                      onClick={() => markAsHelpful(review.id)}
                    >
                      Mark as Helpful
                    </Button>
                    {review.helpful > 0 && (
                      <Badge backgroundColor="gray.20" color="gray.80">
                        {review.helpful} {review.helpful === 1 ? 'person' : 'people'} found this helpful
                      </Badge>
                    )}
                  </Flex>
                </Flex>
              </Card>
            ))}
          </Flex>
        )}
      </View>
    </View>
  );
}

export default ReviewPage;
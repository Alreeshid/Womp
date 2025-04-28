import React, { useState } from 'react';
import { 
  View, 
  Heading, 
  Button, 
  Card, 
  TextField,
  TextAreaField,
  Text
} from '@aws-amplify/ui-react';
import { useNavigate } from 'react-router-dom';
import NavigationBar from '../components/Navbar';
import '../index.css';
import { generateClient } from 'aws-amplify/data';

function Support() {
  const navigate = useNavigate();
  
  // States for the form
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [description, setDescription] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  
  const goToHome = () => {
    navigate('/'); 
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      // Reset form
      setName('');
      setEmail('');
      setSubject('');
      setDescription('');
      setSubmitting(false);
      setSuccessMessage('Your support request has been submitted! We will contact you shortly.');
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setSuccessMessage('');
      }, 5000);
    }, 1500);
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
          Contact Support
        </Heading>
        
        {/* Support Form */}
        <Card 
          variation="elevated" 
          padding="large" 
          borderRadius="large"
          backgroundColor="white"
          style={{ maxWidth: '600px', margin: '0 auto' }}
        >
          {successMessage && (
            <Text 
              color="green" 
              fontSize="medium" 
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
          
          <form onSubmit={handleSubmit}>
            <TextField
              label="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              isRequired={true}
              marginBottom="medium"
            />
            
            <TextField
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              type="email"
              isRequired={true}
              marginBottom="medium"
            />
            
            <TextField
              label="Subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="Enter the subject of your inquiry"
              isRequired={true}
              marginBottom="medium"
            />
            
            <TextAreaField
              label="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Please describe your issue in detail"
              rows={5}
              isRequired={true}
              marginBottom="large"
            />
            
            <Button
              type="submit"
              variation="primary"
              backgroundColor="#B10F2E"
              isLoading={submitting}
              loadingText="Submitting..."
              isFullWidth
            >
              Submit
            </Button>
          </form>
        </Card>
      </View>
    </View>
  );
}

export default Support;
import React from 'react';
import { 
  View, 
  Heading, 
  Button, 
  Card, 
  Flex, 
  Text, 
  Divider,
  Badge,
  Image,
  useBreakpointValue
} from '@aws-amplify/ui-react';
import { useNavigate } from 'react-router-dom';
import NavigationBar from '../components/Navbar';
import Alex from "../images/AlexJohnson.jpg";
import '../index.css';
import { getCurrentUser } from 'aws-amplify/auth';
import { fetchUserAttributes } from 'aws-amplify/auth';
import { generateClient } from 'aws-amplify/data';

import { Authenticator } from '@aws-amplify/ui-react';

const client = generateClient({
  authMode: "userPool"
})

const user = getCurrentUser();
let name, listingCount;

try {
  attributes = fetchUserAttributes();
  name = attributes.name;
} catch (err) {
  // console.error(err);
  // ... handle error ...
}


function Profile() {
  const navigate = useNavigate();
  const isMobile = useBreakpointValue({
    base: true,
    small: true,
    medium: false,
    large: false
  });
  
  // Mock user data - replace with actual user data from your auth system
  const userData = {
    name:  name,
    email: user.loginId,
    joinDate: "March 2023",
    profileImage: Alex,
    listings: 8,
    sold: 12,
    saved: 15
  };

  const recentActivityData = [
    { id: 1, type: "sale", item: "Leather Jacket", date: "2 days ago", price: "$45.00" },
    { id: 2, type: "purchase", item: "Wireless Headphones", date: "1 week ago", price: "$29.99" },
    { id: 3, type: "listing", item: "Vintage Camera", date: "2 weeks ago", price: "$85.50" }
  ];
  
  const goToHome = () => {
    navigate('/'); 
  };

  const goToCreateListing = () => {
    navigate('/CreateListing'); 
  };

  const goToManageListings = () => {
    navigate('/ManageListings'); 
  };

  const goToSavedItems = () => {
    navigate('/SavedItems');
  };

  const goToTransactions = () => {
    navigate('/Transactions');
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
        {/* User Profile Header */}
        <Card 
          variation="elevated" 
          padding="large" 
          marginBottom="large"
          borderRadius="large"
          backgroundColor="#232624"
        >
          <Flex direction={isMobile ? "column" : "row"} alignItems="center" gap="large">
            <Image
              src={userData.profileImage}
              alt="Profile"
              borderRadius="100%"
              width="150px"
              height="150px"
            />
            <Authenticator>
            <View>
              <Heading level={2} marginBottom="xs" color="#460000"><strong>Welcome Back, {user.userId}!</strong></Heading>
              <Text fontSize="medium" color="gray">{userData.email}</Text>
              <Text fontSize="small" color="red.80">Member since {userData.joinDate}</Text>
              
              <Flex marginTop="medium" gap="large">
                <View textAlign="center">
                  <Text fontSize="xx-large" fontWeight="bold" color="#B10F2E">{userData.listings}</Text>
                  <Text color="red">Active Listings</Text>
                </View>
                <View textAlign="center">
                  <Text fontSize="xx-large" fontWeight="bold" color="#B10F2E">{userData.sold}</Text>
                  <Text color="red">Items Sold</Text>
                </View>
                <View textAlign="center">
                  <Text fontSize="xx-large" fontWeight="bold" color="#B10F2E">{userData.saved}</Text>
                  <Text color="red">Saved Items</Text>
                </View>
              </Flex>
            </View>
            </Authenticator>
          </Flex>
        </Card>
        
        {/* Quick Actions */}
        <Heading level={3} marginBottom="medium" color="#DE7C5A">Quick Actions</Heading>
        <Flex 
          direction={isMobile ? "column" : "row"} 
          gap="medium" 
          marginBottom="large"
        >
          <Card 
            variation="elevated" 
            padding="medium" 
            backgroundColor="#232624"
            borderRadius="large"
            style={{ flex: 1, cursor: 'pointer' }}
            onClick={goToCreateListing}
          >
            <Flex direction="column" alignItems="center" textAlign="center" gap="small">
              <Text fontSize="x-large" fontWeight="bold" color="#B10F2E">📝</Text>
              <Text fontWeight="bold" color="#e84441">Create New Listing</Text>
              <Text fontSize="small" color="#574c4b">List your items for sale</Text>
            </Flex>
          </Card>
          
          <Card 
            variation="elevated" 
            padding="medium" 
            backgroundColor="#232624"
            borderRadius="large"
            style={{ flex: 1, cursor: 'pointer' }}
            onClick={goToManageListings}
          >
            <Flex direction="column" alignItems="center" textAlign="center" gap="small">
              <Text fontSize="x-large" fontWeight="bold" color="#B10F2E">🗂️</Text>
              <Text fontWeight="bold" color="#e84441">Manage Listings</Text>
              <Text fontSize="small" color="#574c4b">Edit or remove your listings</Text>
            </Flex>
          </Card>
          
          <Card 
            variation="elevated" 
            padding="medium" 
            backgroundColor="#232624"
            borderRadius="large"
            style={{ flex: 1, cursor: 'pointer' }}
            onClick={goToSavedItems}
          >
            <Flex direction="column" alignItems="center" textAlign="center" gap="small">
              <Text fontSize="x-large" fontWeight="bold" color="#B10F2E">❤️</Text>
              <Text fontWeight="bold" color="#e84441">Saved Items</Text>
              <Text fontSize="small" color="#574c4b">View your wishlist</Text>
            </Flex>
          </Card>
          
          <Card 
            variation="elevated" 
            padding="medium" 
            backgroundColor="#232624"
            borderRadius="large"
            style={{ flex: 1, cursor: 'pointer' }}
            onClick={goToTransactions}
          >
            <Flex direction="column" alignItems="center" textAlign="center" gap="small">
              <Text fontSize="x-large" fontWeight="bold" color="#B10F2E">💰</Text>
              <Text fontWeight="bold" color="#e84441">Transactions</Text>
              <Text fontSize="small" color="#574c4b">View purchase history</Text>
            </Flex>
          </Card>
        </Flex>
        
        {/* Recent Activity */}
        <Heading level={3} marginBottom="medium" color="#DE7C5A">Recent Activity</Heading>
        <Card 
          variation="elevated" 
          padding="medium" 
          marginBottom="large"
          borderRadius="large"
          backgroundColor="#232624"
        >
          {recentActivityData.length > 0 ? (
            recentActivityData.map((activity, index) => (
              <React.Fragment key={activity.id}>
                <Flex alignItems="center" justifyContent="space-between" padding="small">
                  <Flex alignItems="center" gap="medium">
                    <Badge 
                      backgroundColor={
                        activity.type === "sale" ? "#4CAF50" : 
                        activity.type === "purchase" ? "#2196F3" : "#DE7C5A"
                      }
                      color="white"
                      padding="xs small"
                      borderRadius="full"
                    >
                      {activity.type === "sale" ? "Sold" : 
                       activity.type === "purchase" ? "Bought" : "Listed"}
                    </Badge>
                    <View>
                      <Text fontWeight="bold" color="#e84441">{activity.item}</Text>
                      <Text fontSize="small" color="#574c4b">{activity.date}</Text>
                    </View>
                  </Flex>
                  <Text fontWeight="bold" color="#B10F2E">{activity.price}</Text>
                </Flex>
                {index < recentActivityData.length - 1 && <Divider marginY="xs" />}
              </React.Fragment>
            ))
          ) : (
            <Text textAlign="center" padding="large" color="gray.60">No recent activity</Text>
          )}
          
          <Button 
            variation="link" 
            width="100%" 
            marginTop="medium"
            color="#B10F2E"
          >
            View All Activity
          </Button>
        </Card>
        
        {/* Account Settings */}
        <Heading level={3} marginBottom="medium" color="#DE7C5A">Account Settings</Heading>
        <Flex direction={isMobile ? "column" : "row"} gap="medium" marginBottom="large">
          <Button 
            variation="primary" 
            backgroundColor="#B10F2E"
            borderRadius="medium"
          >
            Edit Profile
          </Button>
          <Button 
            variation="primary" 
            backgroundColor="#DE7C5A"
            borderRadius="medium"
          >
            Payment Methods
          </Button>
          <Button 
            variation="primary" 
            backgroundColor="#DE7C5A"
            borderRadius="medium"
          >
            Notification Settings
          </Button>
        </Flex>
      </View>
    </View>
  );
}

export default Profile;
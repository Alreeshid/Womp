import React from 'react';
import { View, Heading, Button } from '@aws-amplify/ui-react';
import { useNavigate } from 'react-router-dom';
import NavigationBar from '../components/Navbar';
import '../index.css';
function Profile() {
  const navigate = useNavigate();
  
  const goToHome = () => {
    navigate('/'); 
  };

  return (
    <View>
      <Button 
        variation="link"
        onClick={goToHome}
      >
        <h1>Womper</h1>
      </Button>
      <NavigationBar />
      <View padding="medium">
        <Heading level={1}><strong>User Profile</strong></Heading>
        <Button variation="primary" marginRight="medium">Create a listing</Button>
        <Button variation="primary" marginRight="medium">Create a post</Button>
      </View>
    </View>
  );
}

export default Profile;
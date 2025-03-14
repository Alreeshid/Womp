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

  const Create = () => {
    navigate('/CreateListing'); 
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
        <Heading level={1}><strong>Welcome Back!</strong></Heading>
        <form></form>
        <Button variation="link" marginRight="medium" onClick = {Create}>Create a listing</Button>
        <Button variation="link" marginRight="medium" onClick = {Create}>Manage your listings</Button>
        
      </View>
    </View>
  );
}

export default Profile;
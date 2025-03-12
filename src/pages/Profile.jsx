import React from 'react';
import { View, Heading } from '@aws-amplify/ui-react';
import NavigationBar from '../components/Navbar';

function Profile() {
  return (
    <View>
       <button variation = "link"
      onClick={() => 
        handleNavigation('/App')}
      ><h1>Womper</h1></button>
      <NavigationBar />
      <View padding="medium">
        <Heading level={1}>User Profile</Heading>
        <button>Create a listing</button>
        <button></button>
        <button>Create a post</button>
        
      </View>
    </View>
  );
}

export default Profile;
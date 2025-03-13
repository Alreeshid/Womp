import React from 'react';
import { View, Heading } from '@aws-amplify/ui-react';
import NavigationBar from '../components/Navbar';

function Profile() {
  return (
    <View>
      <NavigationBar />
      <View padding="medium">
        <Heading level={1}>User Profile</Heading>
        {/* Add profile content here */}
      </View>
    </View>
  );
}

export default Profile;
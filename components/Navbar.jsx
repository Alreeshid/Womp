import React from 'react';
import { 
  View, 
  Button,
  Flex,
  SearchField
} from '@aws-amplify/ui-react';

const NavigationBar = () => {
  return (
    <View
    color = "#FFFFFF"
      
      backgroundColor="#232624"
      padding="medium"
      style={{
        borderBottom: '1px solidrgb(8, 8, 8)'
      }}
    >  <View width="30%">
 
  </View>
  <View width="30%">
          
        </View>
      <Flex
        direction="row"
        justifyContent="center"
        alignItems="center"
        gap="medium"
      >
       
        
       
        <Button color = "#B10F2E"variation="link">Profile</Button>
        <Button color = "#B10F2E"variation="link">Support</Button>
        <Button color = "#B10F2E"variation="link">Verified Sellers</Button>
        <Button color = "#B10F2E"variation="link"></Button>
        <SearchField
            label="Search"
            placeholder="Search products..."
            hasSearchButton={true}
            hasSearchIcon={true}
            color = "black"
           backgroundColor="#606662"
            
          />
        <Button color = "#B10F2E"variation="link"></Button>
      </Flex>
    </View>
  );
};

export default NavigationBar;
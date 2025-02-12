import { 
  View, 
  Button,
  Flex,
  SearchField
} from '@aws-amplify/ui-react';

const NavigationBar = () => {
  return (
    <View
      backgroundColor="white"
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
       
        
       
        <Button variation="link">Profile</Button>
        <Button variation="link">Support</Button>
        <Button variation="link">Daily Deals</Button>
        <Button variation="link">Review</Button>
        <Button variation="link"></Button>
        <SearchField
            label="Search"
            placeholder="Search products..."
            hasSearchButton={true}
            hasSearchIcon={true}
          />
        <Button variation="link"></Button>
        <Button variation="link">Clothing</Button>
        <Button variation="link">Electronics</Button>
        <Button variation="link">Jewelery</Button>
        <Button variation="link">Refurbished</Button>
        <Button variation="link">Daily Deals</Button>
      </Flex>
    </View>
  );
};

export default NavigationBar;
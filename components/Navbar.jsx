import React, { useState } from 'react';
import { 
  View, 
  Button,
  Flex,
  SearchField,
  useBreakpointValue
} from '@aws-amplify/ui-react';
import { Link, useNavigate } from 'react-router-dom';

const NavigationBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  
  // Use breakpoint to determine layout
  const isMobile = useBreakpointValue({
    base: true,
    medium: false
  });
  
  // Navigation handler function
  const handleNavigation = (path) => {
    navigate(path);
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  return (
    <View
      color="#FFFFFF"
      backgroundColor="#232624"
      padding="medium"
      style={{
        borderBottom: '1px solid rgb(8, 8, 8)'
      }}
    >
      {isMobile ? (
        // Mobile layout
        <Flex direction="row" justifyContent="space-between" alignItems="center">
          <Button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            variation="link"
            color="#B10F2E"
          >
            ☰ Menu
          </Button>
          
          <SearchField
            label="Search"
            placeholder="Search..."
            hasSearchButton={true}
            hasSearchIcon={true}
            color="black"
            backgroundColor="#606662"
            width="50%"
          />
          
          {isMenuOpen && (
            <Flex
              direction="column"
              position="absolute"
              top="60px"
              left="0"
              width="100%"
              backgroundColor="#232624"
              padding="medium"
              zIndex="10"
            >
              <Button 
                color="#B10F2E" 
                variation="link"
                onClick={() => handleNavigation('/profile')}
              >
                Profile
              </Button>
              <Button color="#B10F2E" variation="link">Support</Button>
              <Button color="#B10F2E" variation="link">Daily Deals</Button>
              <Button color="#B10F2E" variation="link">Review</Button>
              <Button color="#B10F2E" variation="link">Clothing</Button>
              <Button color="#B10F2E" variation="link">Electronics</Button>
              <Button color="#B10F2E" variation="link">Jewelery</Button>
              <Button color="#B10F2E" variation="link">Refurbished</Button>
            </Flex>
          )}
        </Flex>
      ) : (
        // Desktop layout
        <Flex
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          wrap="wrap"
        >
          <Flex gap="medium">
            <Button 
              color="#B10F2E" 
              variation="link"
              onClick={() => handleNavigation('/profile')}
            >
              Profile
            </Button>
            <Button color="#B10F2E" variation="link">Support</Button>
            <Button color="#B10F2E" variation="link">Daily Deals</Button>
            <Button color="#B10F2E" variation="link">Review</Button>
          </Flex>
          
          <SearchField
            label="Search"
            placeholder="Search products..."
            hasSearchButton={true}
            hasSearchIcon={true}
            color="black"
            backgroundColor="#606662"
            width="300px"
          />
          
          <Flex gap="medium">
            <Button color="#B10F2E" variation="link">Clothing</Button>
            <Button color="#B10F2E" variation="link">Electronics</Button>
            <Button color="#B10F2E" variation="link">Jewelery</Button>
            <Button color="#B10F2E" variation="link">Refurbished</Button>
          </Flex>
        </Flex>
      )}
    </View>
  );
};

export default NavigationBar;
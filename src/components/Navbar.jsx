import React, { useState } from 'react';
import { 
  View, 
  Button,
  Flex,
  SearchField,
  useBreakpointValue
} from '@aws-amplify/ui-react';
import {useNavigate } from 'react-router-dom';

const NavigationBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  
 
  const isMobile = useBreakpointValue({
    base: true,
    medium: false
  });
  

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
              <Button color="#B10F2E" variation="link"   onClick={() => handleNavigation('/support')}>Support</Button>
              <Button color="#B10F2E" variation="link"   onClick={() => handleNavigation('/Review')}>Review</Button>
              <Button color="#B10F2E" variation="link"   onClick={() => handleNavigation('/Clothing')}>Clothing</Button>
              <Button color="#B10F2E" variation="link"   onClick={() => handleNavigation('/Electronics')}>Electronics</Button>
              <Button color="#B10F2E" variation="link"   onClick={() => handleNavigation('/Jewelery')}>Jewelery</Button>
              
            </Flex>
          )}
        </Flex>
      ) : (



        <Flex
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          wrap="wrap"
        >
          <Flex gap="small">
            <Button 
              color="#B10F2E" 
              variation="link"
              onClick={() => handleNavigation('/profile')}
            >
              Profile
            </Button>
            <Button color="#B10F2E" 
                    variation="link"
                    
              onClick={() => handleNavigation('/support')}
            >Support</Button>
            <Button color="#B10F2E" variation="link" onClick={() => handleNavigation('/Review')}>Review</Button>
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
          
          <Flex gap="small">
            <Button color="#B10F2E" variation="link" onClick={() => handleNavigation('/Clothing')}>Clothing</Button>
            <Button color="#B10F2E" variation="link" onClick={() => handleNavigation('/Electronics')}>Electronics</Button>
            <Button color="#B10F2E" variation="link"onClick={() => handleNavigation('/Jewelery')}>Jewelery</Button>
          </Flex>
        </Flex>
      )}
    </View>
  );
};

export default NavigationBar;
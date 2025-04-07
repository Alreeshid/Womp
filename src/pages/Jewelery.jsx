import React from 'react';
import { 
  View,
  Button,
  Heading,
  useBreakpointValue
} from '@aws-amplify/ui-react';
import NavigationBar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';
import '../index.css';
import ProductCard from '../components/ProductCard.jsx';
import Chain from "../images/Chain.jpg";

function Jewelery() {
  const navigate = useNavigate();
  
  const isMobile = useBreakpointValue({
    base: true,
    small: true,
    medium: false,
    large: false,
    xl: false
  });
    
  const goHome = () => {
    navigate('/'); 
  };

  // Jewelry products with proper ID
  const jewelryProducts = [
    {
      id: 'jewelery-women-necklace', // This ID matches what's in ProductDetails
      title: "14k Women Necklace",
      badges: ['$100.99', 'New'],
      image: Chain
    }
  ];

  const gridContainerStyle = {
    display: 'grid',
    gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fill, minmax(200px, 1fr))',
    gap: '20px',
    width: '100%'
  };

  return (
    <View padding="medium">
      <Button 
        variation="link"
        onClick={goHome}
      >
        <h1>Womper</h1>
      </Button>
      <NavigationBar />
      {/* Jewelry Products Section */}
      <View marginBottom="3rem">
        <Heading 
          level={2} 
          marginBottom="medium"
          padding="medium"
          color={'red.90'}
        >
          <h3>Jewelry</h3>
        </Heading>
        <View style={gridContainerStyle}>
          {jewelryProducts.map((product, index) => (
            <ProductCard
              key={`jewelry-${index}`}
              id={product.id}
              title={product.title}
              badges={product.badges}
              image={product.image}
            />
          ))}
        </View>
      </View>
    </View>
  );
}

export default Jewelery;
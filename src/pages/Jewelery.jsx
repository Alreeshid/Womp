import React from 'react';
import { 
  View,
  Button,
  Heading
} from '@aws-amplify/ui-react';
import NavigationBar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';
import '../index.css';
import ProductCard from '../components/ProductCard.jsx';
import WinterBreak from "../images/Nike.png";


function Jewelery() {
  const navigate = useNavigate();
    
  const goHome = () => {
    navigate('/'); 
  };

    
  const clothingProducts = [
    {
      title: "Winter Gloves",
      badges: ['$5', 'Used'],
      image: WinterBreak
    },
   
      
  ];

  return (
    <View padding="medium">
      <Button 
        variation="link"
        onClick={goHome}
      >
        <h1>Womper</h1>
      </Button>
      <NavigationBar />
      {/* Clothing Products Section */}
      <View marginBottom="3rem">
        <Heading 
          level={2} 
          marginBottom="medium"
          padding="medium"
          color={'red.90'}
        >
          <h3>Jewelery</h3>
        </Heading>
        <View style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
          {clothingProducts.map((product, index) => (
            <ProductCard
              key={`clothing-${index}`}
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
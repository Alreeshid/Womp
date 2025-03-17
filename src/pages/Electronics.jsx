import React from 'react';
import { 
  View,
  Button,
  Heading
} from '@aws-amplify/ui-react';
import NavigationBar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';
import '../index.css';
import Adidas from "../images/Adidas.png";
import lipBalm from '../images/Socks.png';
import ProductCard from '../components/ProductCard.jsx';
import WinterBeanie from "../images/WinterBeanie.png";
import WinterBreak from "../images/Nike.png";
import Shoes from "../images/Shoes.png";
import Tanktop from "../images/Goldfish tanktop.png";
import Jacket from "../images/Spidermanjacket.png";
import Jeans from "../images/Jeans.png";

function Electronics() {
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
    { 
      title: "Adidas men Athletic Cushioned Crew Socks 6 Pairs",
      badges: ['$1.99', 'New'],
      image: lipBalm 
    },
    {
      title: "Winter Beanie - Maroon",
      badges: ['$10', 'Used-Good'],
      image: WinterBeanie
    },
    {
      title: "Fish Tanktop",
      badges: ['$35', 'Used-Good'],
      image: Tanktop
    },
    {
      title: "High heel sandals",
      badges: ['$35', 'Used-Good'],
      image: Shoes
    },
    {
      title: "Spiderman Jacket",
      badges: ['$35', 'Used-Good'],
      image: Jacket
    },
  
    { 
      title: "Adidas men Tiro 23 League Pants",
      badges: ['$10', 'Used-Like new'],
      image: Adidas 
    },
 
    {
          title: "Jeans women Medium",
          badges: ['$35', 'Used-Good'],
          image: Jeans
        },
        {
          title: "Spiderman Jacket",
          badges: ['$35', 'Used-Good'],
          image: Jacket
        },
        {
          title: "Spiderman Jacket",
          badges: ['$35', 'Used-Good'],
          image: Jacket
        },
        {
          title: "Spiderman Jacket",
          badges: ['$35', 'Used-Good'],
          image: Jacket
        },
        {
          title: "Spiderman Jacket",
          badges: ['$35', 'Used-Good'],
          image: Jacket
        },
        {
          title: "Spiderman Jacket",
          badges: ['$35', 'Used-Good'],
          image: Jacket
        },
        {
          title: "Spiderman Jacket",
          badges: ['$35', 'Used-Good'],
          image: Jacket
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
          <h3>Electronics</h3>
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

export default Electronics;
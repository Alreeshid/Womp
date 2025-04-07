import React, { useEffect } from 'react';
import { 
  View,
  Button,
  Heading,
  useBreakpointValue
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
import Cookie from "../images/PokemonCookie.png";
import LongCoat from "../images/LongCoat.png";
import GreyCoat from "../images/GreyCoat.png";
import Puma from "../images/TealPuma.png";
import SasShirt from "../images/SasShirt.png";
import WomenSocks from "../images/WomenSocks.png";
import Phenix from "../images/Pheinox.png";
import Cherries from "../images/Cherries.jpg";
import Little from "../images/LittleThings.jpg";
import DD from "../images/DD.png";


function Clothing() {
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

  // Convert title to URL-friendly ID
  const getProductId = (title) => {
    return title.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
  };

  // Add IDs to all clothing products
  const clothingProducts = [
    {
      id: 'winter-gloves',
      title: "Winter Gloves",
      badges: ['$5', 'Used'],
      image: WinterBreak
    },
    { 
      id: 'adidas-men-athletic-cushioned-crew-socks-6-pairs',
      title: "Adidas men Athletic Cushioned Crew Socks 6 Pairs",
      badges: ['$1.99', 'New'],
      image: lipBalm 
    },
    {
      id: 'winter-beanie---maroon',
      title: "Winter Beanie - Maroon",
      badges: ['$10', 'Used-Good'],
      image: WinterBeanie
    },
    {
      id: 'fish-tanktop',
      title: "Fish Tanktop",
      badges: ['$35', 'Used-Good'],
      image: Tanktop
    },
    {
      id: 'high-heel-sandals',
      title: "High heel sandals",
      badges: ['$35', 'Used-Good'],
      image: Shoes
    },
    {
      id: 'spiderman-jacket',
      title: "Spiderman Jacket",
      badges: ['$35', 'Used-Good'],
      image: Jacket
    },
    { 
      id: 'adidas-men-tiro-23-league-pants',
      title: "Adidas men Tiro 23 League Pants",
      badges: ['$10', 'Used-Like new'],
      image: Adidas 
    },
    {
      id: 'jeans-women-medium',
      title: "Jeans women Medium",
      badges: ['$35', 'Used-Good'],
      image: Jeans
    },
    {
      id: 'sasquatch-shirt',
      title: "Sasquatch Shirt",
      badges: ['$15', 'Used-Good'],
      image: SasShirt
    },
    {
      id: 'cookie-pokemon-tshirt',
      title: "Cookie Pokemon Tshirt",
      badges: ['$35', 'Used-Good'],
      image: Cookie
    },
    {
      id: 'long-coat-men',
      title: "Long Coat Men",
      badges: ['$35', 'Used-Good'],
      image: LongCoat
    },
    {
      id: 'teal-puma-shoes',
      title: "Teal Puma Shoes",
      badges: ['$35', 'Used-Good'],
      image: Puma
    },
    {
      id: 'knee-socks',
      title: "Knee Socks",
      badges: ['$45', 'Used-Good'],
      image: WomenSocks
    },
    {
      id: 'little-things-shirt',
      title: "Little Things Shirt",
      badges: ['$35', 'Used-Good'],
      image: Little
    },
    {
      id: 'dunkin-donuts-shirt',
      title: "Dunkin Donuts Shirt",
      badges: ['$35', 'Used-Good'],
      image: DD
    },
    {
      id: 'grey-long-coat',
      title: "Grey Long Coat",
      badges: ['$35', 'Used-Good'],
      image: GreyCoat
    },
    {
      id: 'pheniox-tshirt',
      title: "Pheniox Tshirt",
      badges: ['$35', 'Used'],
      image: Phenix
    },
    {
      id: 'cherries-tshirt',
      title: "Cherries Tshirt",
      badges: ['$35', 'New'],
      image: Cherries
    }
  ];

  // Verify all products have IDs that match what's in ProductDetails
  useEffect(() => {
    // This is just a debug check, you can remove it in production
    clothingProducts.forEach(product => {
      if (!product.id) {
        console.warn(`Product "${product.title}" is missing an ID`);
      }
    });
  }, []);

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
      {/* Clothing Products Section */}
      <View marginBottom="3rem">
        <Heading 
          level={2} 
          marginBottom="medium"
          padding="medium"
          color={'red.90'}
        >
          <h3>Clothing</h3>
        </Heading>
        <View style={gridContainerStyle}>
          {clothingProducts.map((product, index) => (
            <ProductCard
              key={`clothing-${index}`}
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

export default Clothing;
import React from 'react';
import { 
  View,
  Button,
  Heading,
  useBreakpointValue
} from '@aws-amplify/ui-react';
import NavigationBar from './components/Navbar';
import { useNavigate } from 'react-router-dom';
import './index.css';
import Camera from "./images/Camera.png";
import minecraftBottle from './images/MinecraftWaterBottle.jpg';
import lipBalm from './images/VanillaLipBalm.png';
import Flowershirt from "./images/Flowershirt.png";
import MotorKeychain from "./images/Motorchain.jpg";
import Nightlight from "./images/Nightlight.png";
import ProductCard from './components/ProductCard.jsx';

function Electronics() {
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

  const featuredProducts = [
    { 
      title: "Minecraft Water Bottle",
      badges: ['$10', 'Used-Like new'],
      image: minecraftBottle 
    },
    { 
      title: "Vanilla Lip balm",
      badges: ['$1.99', 'New'],
      image: lipBalm 
    },
    { 
      title: "FlowerShirt",
      badges: ['$12.99', 'New'],
      image: Flowershirt 
    },
    { 
      title: "Couples'Keychain set",
      badges: ['$6.99', 'New'],
      image: MotorKeychain 
    },
    { 
      title: "Flower Night Light",
      badges: ['$16.99', 'New'],
      image: Nightlight 
    },
    { 
      title: "4k Sony Camera with neck strap",
      badges: ['$100.99', 'Used'],
      image: Camera 
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
      {/* Featured Products Section */}
      <View marginBottom="3rem">
        <Heading 
          level={2} 
          marginBottom="medium"
          padding="medium"
          color={'red.90'}
        >
          <h3>Featured</h3>
        </Heading>
        <View style={gridContainerStyle}>
          {featuredProducts.map((product, index) => (
            <ProductCard
              key={`featured-${index}`}
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
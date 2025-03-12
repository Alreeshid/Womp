
import React from 'react';
import { 
  View,
  Heading,
} from '@aws-amplify/ui-react';
import minecraftBottle from './images/MinecraftWaterBottle.jpg';
import lipBalm from './images/VanillaLipBalm.png';
import ProductCard from './components/ProductCard.jsx';
import NavigationBar from './components/Navbar';
import Flowershirt from "./images/Flowershirt.png"
import MotorKeychain from "./images/Motorchain.jpg"
import Nightlight from "./images/Nightlight.png"
import Camera from "./images/Camera.png"
import GamingMouse from "./images/Gaming Mouse.png"
import SpiderAttachment from "./images/SpiderAttachment.png"
import Jeff from "./images/Jefftheshark.png"
import Mrbeast from "./images/Mrbeast.png"
import cat from "./images/cat.png"
import Lego from "./images/Lego Flowers.png"
import WinterBeanie from "./images/WinterBeanie.png"
import WinterBreak from "./images/WinterBreak.png"
import Shoes from "./images/Shoes.png"
import Tanktop from "./images/Goldfish tanktop.png"
import Jacket from "./images/Spidermanjacket.png"
import Jeans from "./images/Jeans.png"

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


const newArrivals = [
  {
    title: "Gaming Mouse",
    badges: ['$25', 'New'],
    image: GamingMouse
  },
  {
    title: "Spiderman Headphone Attachment",
    badges: ['$35', 'Used-Good'],
    image: SpiderAttachment
  },
  {
    title: "Jeff the Shark",
    badges: ['$65', 'Used-Good'],
    image: Jeff
  },
  {
    title: "MrBeast Funko Pop - includes one free Feastables",
    badges: ['$79.99', 'Used-Good'],
    image: Mrbeast
  },
  {
    title: "crochiet cats - 10 ct ",
    badges: ['$35.99', 'Used'],
    image: cat
  },
  {
    title: "Lego Flowers set",
    badges: ['$35', 'Used-Good'],
    image: Lego
  }
];


const clothingProducts = [
  {
    title: "Winter Gloves",
    badges: ['$5', 'Used'],
    image: WinterBreak
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
    title: "Jeans women Medium",
    badges: ['$35', 'Used-Good'],
    image: Jeans
  }
];

function App() {

  return (
    <View padding="medium">
      <button variation = "link"
      onClick={() => 
        handleNavigation('/App')}
      ><h1>Womper</h1></button>
      <NavigationBar />
      
      {/* First Row - Featured Products */}
      <View marginBottom="3rem">
        <Heading 
          level={2} 
          marginBottom="medium"
          padding="medium"
          color={'red.90'}
        >
          <h1>Featured Products</h1>
        </Heading>
        <View style={{ display: 'flex', gap: '20px' }}>
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

      {/* Second Row - New Arrivals */}
      <View marginTop="3rem">
        <Heading 
          level={2} 
          marginBottom="medium"
          padding="medium"
          color={'red.90'}
        >
          New Arrivals
        </Heading>
        <View style={{ display: 'flex', gap: '20px' }}>
          {newArrivals.map((product, index) => (
            <ProductCard
              key={`new-${index}`}
              title={product.title}
              badges={product.badges}
              image={product.image}
            />
          ))}
        </View>
      </View>
      
      {/* Third Row - Clothing */}
      <View marginTop="3rem">
        <Heading 
          level={2} 
          marginBottom="medium"
          padding="medium"
          color={'red.90'}
        >
          Clothing
        </Heading>
        <View style={{ display: 'flex', gap: '20px' }}>
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

export default App;

import React from 'react';
import { 
  View,
  Heading,
} from '@aws-amplify/ui-react';
import minecraftBottle from '/images/MinecraftWaterBottle.jpg';
import lipBalm from '/images/VanillaLipBalm.png';
import ProductCard from '/components/ProductCard.jsx';
import NavigationBar from '../components/Navbar';
import Flowershirt from "/images/Flowershirt.png"
import MotorKeychain from "/images/Motorchain.jpg"
import Nightlight from "/images/Nightlight.png"
import Camera from "/images/Camera.png"
import GamingMouse from "/images/Gaming Mouse.png"
import SpiderAttachment from "/images/SpiderAttachment.png"
import Jeff from "/images/Jefftheshark.png"
import Mrbeast from "/images/Mrbeast.png"
import cat from "/images/cat.png"
import Lego from "/images/Lego Flower.png"
function App() {
  return (
    <View padding="medium">
      <h1>Womper</h1>
      <NavigationBar />
      {/* First Row */}
      <View marginBottom="3rem">
        <Heading 
          level={2} 
          marginBottom="medium"
          padding="medium"
          color={'red.90'}
        >
          Featured Products
        </Heading>
        <View style={{ display: 'flex', gap: '20px' }}>
          <ProductCard
            title="Minecraft Water Bottle"
            badges={['$10', 'Used-Like new']}
            image={minecraftBottle}
          />
          <ProductCard
            title="Vanilla Lip balm"
            badges={['$1.99', 'New']}
            image={lipBalm}
          />
          <ProductCard
            title="FlowerShirt"
            badges={['$12.99', 'New']}
            image={Flowershirt}
          />
          <ProductCard
            title="Couples'Keychain set"
            badges={['$6.99', 'New']}
            image={MotorKeychain}
          />
          <ProductCard
          title="Flower Night Light"
          badges={['$16.99', 'New']}
          image={Nightlight}
          />  
          <ProductCard
          title="4k Sony Camera with neck strap"
          badges={['$100.99', 'Used']}
          image={Camera}
          />  
        </View>
      </View>

      {/* Second Row */}
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
          <ProductCard
            title="Gaming Mouse"
            badges={['$25', 'New']}
            image={GamingMouse}
          />
          <ProductCard
            title="Spiderman Headphone Attachment"
            badges={['$35', 'Used-Good']}
            image={SpiderAttachment}
          />

          <ProductCard
            title="Jeff the Shark"
            badges={['$65', 'Used-Good']}
            image={Jeff}
          />
          <ProductCard
            title="MrBeast Funko Pop - includes one free Feastables"
            badges={['$79.99', 'Used-Good']}
            image={Mrbeast}
          />
          <ProductCard
            title="crochiet cats - 10 ct "
            badges={['$35.99', 'Used']}
            image={cat}
          />
          <ProductCard
          title="Lego Flowers set"
          badges={['$35', 'Used-Good']}
          image={Lego}
        />


        </View>
      </View>
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
          <ProductCard
            title="Gaming Mouse"
            badges={['$25', 'New']}
            image={GamingMouse}
          />
          <ProductCard
            title="Spiderman Headphone Attachment"
            badges={['$35', 'Used-Good']}
            image={SpiderAttachment}
          />

          <ProductCard
            title="Spiderman Headphone Attachment"
            badges={['$35', 'Used-Good']}
            image={SpiderAttachment}
          />
          <ProductCard
            title="Spiderman Headphone Attachment"
            badges={['$35', 'Used-Good']}
            image={SpiderAttachment}
          />
          <ProductCard
            title="Spiderman Headphone Attachment"
            badges={['$35', 'Used-Good']}
            image={SpiderAttachment}
          /><ProductCard
          title="Spiderman Headphone Attachment"
          badges={['$35', 'Used-Good']}
          image={SpiderAttachment}
        />


        </View>
      </View>
     
    </View>
  );
}

export default App;
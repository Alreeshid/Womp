
import React from 'react';
import { 
  View,
  Heading,
} from '@aws-amplify/ui-react';
import minecraftBottle from '/images/MinecraftWaterBottle.jpg';
import lipBalm from '/images/VanillaLipBalm.png';
import ProductCard from '/components/ProductCard.jsx';
import NavigationBar from '../components/Navbar';

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
            title="Lip balm"
            badges={['$6.99', 'New']}
            image={lipBalm}
          />
          <ProductCard
            title="Lip balm"
            badges={['$6.99', 'New']}
            image={lipBalm}
          />
          <ProductCard
            title="Lip balm"
            badges={['$6.99', 'New']}
            image={lipBalm}
          />
          <ProductCard
          title="Lip balm"
          badges={['$6.99', 'New']}
          image={lipBalm}
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
            image={minecraftBottle}
          />
          <ProductCard
            title="Headphones"
            badges={['$35', 'Used-Good']}
            image={lipBalm}
          />
        </View>
      </View>
      
     
    </View>
  );
}

export default App;
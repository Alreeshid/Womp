import React, { useEffect, useState } from 'react';
import { 
  View, 
  Heading, 
  Text, 
  Image, 
  Flex, 
  Badge, 
  Button,
  Divider,
  useBreakpointValue
} from '@aws-amplify/ui-react';
import { useParams, useNavigate } from 'react-router-dom';
import NavigationBar from "../components/Navbar.jsx";

// Import all product images
import Camera from "../images/Camera.png";
import minecraftBottle from '../images/MinecraftWaterBottle.jpg';
import lipBalm from '../images/VanillaLipBalm.png';
import Flowershirt from "../images/Flowershirt.png";
import MotorKeychain from "../images/Motorchain.jpg";
import Nightlight from "../images/Nightlight.png";
import Adidas from "../images/Adidas.png";
import Socks from '../images/Socks.png';
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
import Chain from "../images/Chain.jpg";

const ProductDetails = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  
  const isMobile = useBreakpointValue({
    base: true,
    small: true,
    medium: false,
    large: false,
    xl: false
  });

  // Product database
  const allProducts = [

    {
      id: 'jewelery-women-necklace',
      title: "14kWomen Necklace",
      badges: ['$100.99', 'New'],
      image: Chain,
      description: "Beautiful 14k gold necklace for women. Perfect for special occasions and everyday wear.",
      category: "Jewelry",
      seller: "LuxuryJewels",
      condition: "New"
    },
    { 
      id: 'minecraft-water-bottle',
      title: "Minecraft Water Bottle",
      badges: ['$10', 'Used-Like new'],
      image: minecraftBottle,
      description: "A water bottle featuring Minecraft designs. Used but in like-new condition.",
      category: "Accessories",
      seller: "MinecraftFan123",
      condition: "Used - Like New"
    },
    { 
      id: 'vanilla-lip-balm',
      title: "Vanilla Lip balm",
      badges: ['$1.99', 'New'],
      image: lipBalm,
      description: "Brand new vanilla-scented lip balm. Perfect for dry lips.",
      category: "Beauty",
      seller: "BeautyShop",
      condition: "New"
    },
    { 
      id: 'flowershirt',
      title: "FlowerShirt",
      badges: ['$12.99', 'New'],
      image: Flowershirt,
      description: "Stylish floral pattern shirt. Comfortable fabric and vibrant colors.",
      category: "Clothing",
      seller: "FashionStore",
      condition: "New"
    },
    { 
      id: 'couples-keychain-set',
      title: "Couples'Keychain set",
      badges: ['$6.99', 'New'],
      image: MotorKeychain,
      description: "Beautiful keychain set for couples. Perfect gift for anniversaries.",
      category: "Accessories",
      seller: "GiftIdeas",
      condition: "New"
    },
    { 
      id: 'flower-night-light',
      title: "Flower Night Light",
      badges: ['$16.99', 'New'],
      image: Nightlight,
      description: "Decorative flower-shaped night light. Creates a calming ambient light.",
      category: "Electronics",
      seller: "HomeDecor",
      condition: "New"
    },
    { 
      id: '4k-sony-camera-with-neck-strap',
      title: "4k Sony Camera with neck strap",
      badges: ['$100.99', 'Used'],
      image: Camera,
      description: "Used Sony 4K camera in excellent working condition. Comes with neck strap.",
      category: "Electronics",
      seller: "PhotoPro",
      condition: "Used"
    },
    
    // New products
    {
      id: 'winter-gloves',
      title: "Nike shoes",
      badges: ['$5', 'Used'],
      image: WinterBreak,
      description: "Shoes. Used but still in good condition.",
      category: "Clothing",
      seller: "WinterGear",
      condition: "Used"
    },
    { 
      id: 'adidas-men-athletic-cushioned-crew-socks-6-pairs',
      title: "Adidas men Athletic Cushioned Crew Socks 6 Pairs",
      badges: ['$1.99', 'New'],
      image: Socks,
      description: "New pack of 6 pairs of Adidas men's athletic cushioned crew socks. Perfect for sports and everyday wear.",
      category: "Clothing",
      seller: "SportsGear",
      condition: "New"
    },
    {
      id: 'winter-beanie---maroon',
      title: "Winter Beanie - Maroon",
      badges: ['$10', 'Used-Good'],
      image: WinterBeanie,
      description: "Warm maroon winter beanie. Used but in good condition, perfect for cold weather.",
      category: "Clothing",
      seller: "WinterGear",
      condition: "Used - Good"
    },
    {
      id: 'fish-tanktop',
      title: "Fish Tanktop",
      badges: ['$35', 'Used-Good'],
      image: Tanktop,
      description: "Stylish fish-pattern tanktop. Used but in good condition, perfect for summer.",
      category: "Clothing",
      seller: "SummerWear",
      condition: "Used - Good"
    },
    {
      id: 'high-heel-sandals',
      title: "High heel sandals",
      badges: ['$35', 'Used-Good'],
      image: Shoes,
      description: "Elegant high heel sandals. Used but in good condition, perfect for special occasions.",
      category: "Footwear",
      seller: "FashionFootwear",
      condition: "Used - Good"
    },
    {
      id: 'spiderman-jacket',
      title: "Spiderman Jacket",
      badges: ['$35', 'Used-Good'],
      image: Jacket,
      description: "Cool Spiderman themed jacket. Used but in good condition, perfect for fans.",
      category: "Clothing",
      seller: "SuperheroFashion",
      condition: "Used - Good"
    },
    { 
      id: 'adidas-men-tiro-23-league-pants',
      title: "Adidas men Tiro 23 League Pants",
      badges: ['$10', 'Used-Like new'],
      image: Adidas,
      description: "Adidas men's Tiro 23, athletic pants perfect for sports and casual wear. Used but like new.",
      category: "Clothing",
      seller: "SportsGear",
      condition: "Used - Like New"
    },
    {
      id: 'jeans-women-medium',
      title: "Jeans women Medium",
      badges: ['$35', 'Used-Good'],
      image: Jeans,
      description: "Women's medium size jeans. Used but in good condition, perfect for casual wear.",
      category: "Clothing",
      seller: "CasualWear",
      condition: "Used - Good"
    },
    {
      id: 'sasquatch-shirt',
      title: "Sasquatch Shirt",
      badges: ['$15', 'Used-Good'],
      image: SasShirt,
      description: "Fun Sasquatch themed shirt. Used but in good condition, perfect for casual wear.",
      category: "Clothing",
      seller: "NoveltyWear",
      condition: "Used - Good"
    },
    {
      id: 'cookie-pokemon-tshirt',
      title: "Cookie Pokemon Tshirt",
      badges: ['$35', 'Used-Good'],
      image: Cookie,
      description: "Pokemon themed t-shirt with cookie design. Used but in good condition, perfect for fans.",
      category: "Clothing",
      seller: "PokemonFashion",
      condition: "Used - Good"
    },
    {
      id: 'long-coat-men',
      title: "Long Coat Men",
      badges: ['$35', 'Used-Good'],
      image: LongCoat,
      description: "Men's long coat, perfect for cold weather. Used but in good condition, stylish and warm.",
      category: "Clothing",
      seller: "WinterStyle",
      condition: "Used - Good"
    },
    {
      id: 'teal-puma-shoes',
      title: "Teal Puma Shoes",
      badges: ['$35', 'Used-Good'],
      image: Puma,
      description: "Teal colored Puma athletic shoes. Used but in good condition, comfortable and stylish.",
      category: "Footwear",
      seller: "SportyShoes",
      condition: "Used - Good"
    },
    {
      id: 'knee-socks',
      title: "Knee Socks",
      badges: ['$45', 'Used-Good'],
      image: WomenSocks,
      description: "Women's knee-high socks. Used but in good condition, comfortable and stylish.",
      category: "Clothing",
      seller: "SocksAndMore",
      condition: "Used - Good"
    },
    {
      id: 'little-things-shirt',
      title: "Little Things Shirt",
      badges: ['$35', 'Used-Good'],
      image: Little,
      description: "'Little Things' graphic t-shirt. Used but in good condition, casual and comfortable.",
      category: "Clothing",
      seller: "GraphicTees",
      condition: "Used - Good"
    },
    {
      id: 'dunkin-donuts-shirt',
      title: "Dunkin Donuts Shirt",
      badges: ['$35', 'Used-Good'],
      image: DD,
      description: "Dunkin Donuts themed t-shirt. Used but in good condition, perfect for fans.",
      category: "Clothing",
      seller: "BrandedWear",
      condition: "Used - Good"
    },
    {
      id: 'grey-long-coat',
      title: "Grey Long Coat",
      badges: ['$35', 'Used-Good'],
      image: GreyCoat,
      description: "Grey long coat, elegant and warm. Used but in good condition, perfect for formal occasions.",
      category: "Clothing",
      seller: "FormalWear",
      condition: "Used - Good"
    },
    {
      id: 'pheniox-tshirt',
      title: "Pheniox Tshirt",
      badges: ['$35', 'Used'],
      image: Phenix,
      description: "Phoenix themed t-shirt. Used but still in decent condition, casual and unique.",
      category: "Clothing",
      seller: "GraphicTees",
      condition: "Used"
    },
    {
      id: 'cherries-tshirt',
      title: "Cherries Tshirt",
      badges: ['$35', 'New'],
      image: Cherries,
      description: "Cherry pattern t-shirt. Brand new, never worn. Cute and playful design.",
      category: "Clothing",
      seller: "FruitFashion",
      condition: "New"
    },
    
    
            
            
            
  ];
  
  
  useEffect(() => {
    console.log("Looking for product with ID:", productId);
    
    const foundProduct = allProducts.find(p => p.id === productId);
    
    if (foundProduct) {
      console.log("Found product:", foundProduct);
      setProduct(foundProduct);
      document.title = `Womper - ${foundProduct.title}`;
    } else {
      console.error(`Product with ID ${productId} not found`);
    }
  }, [productId]);
  
  
  const goBack = () => {
    navigate(-1);
  };
  
  
  const addToCart = () => {
    alert(`${product.title} added to cart!`);
  };
  
  if (!product) {
    return (
      <View padding="medium">
        <Button 
          variation="link"
          onClick={() => navigate('/')}
        >
          <h1>Womper</h1>
        </Button>
        <NavigationBar />
        <View padding="large" textAlign="center">
          <Heading level={3}>Product not found</Heading>
          <Button 
            onClick={goBack}
            variation="primary"
            backgroundColor="#B10F2E"
            marginTop="medium"
          >
            Go Back
          </Button>
        </View>
      </View>
    );
  }
  
  return (
    <View padding="medium">
      
      <Button 
        variation="link"
        onClick={() => navigate('/')}
      >
        <h1>Womper</h1>
      </Button>
      
      
      <NavigationBar />
      
      
      <Button 
        onClick={goBack}
        variation="link"
        color="#B10F2E"
        marginTop="medium"
      >
        ← Back
      </Button>
      
     
      <Flex 
        direction={isMobile ? "column" : "row"}
        padding="large"
        gap="large"
      >
        
        <View 
          width={isMobile ? "100%" : "40%"}
          backgroundColor="#f8f8f8"
          padding="medium"
          border="1px solid #e0e0e0"
          borderRadius="medium"
        >
          <Image
            src={product.image}
            alt={product.title}
            style={{
              width: '100%',
              height: 'auto',
              maxHeight: '400px',
              objectFit: 'contain'
            }}
          />
        </View>
        
        
        <View width={isMobile ? "100%" : "60%"}>
          <Heading color="#e84441" level={2}>{product.title}</Heading>
          
          
          <Flex gap="0.5rem" wrap="wrap" marginTop="small">
            {product.badges.map((badge, index) => (
              <Badge
                key={`badge-${index}`}
                backgroundColor={
                  badge.toLowerCase().includes('used') ? '#E08D5F' : 
                  badge.toLowerCase().includes('$') ? '#B10F2E' : '#DE7C5A'
                }
                color="#e84441"
                style={{ 
                  padding: '0.25rem 0.5rem',
                  borderRadius: '1rem',
                  fontSize: '0.8rem',
                  fontWeight: '500'
                }}
              >
                {badge}
              </Badge>
            ))}
          </Flex>
          
          
          <Text marginTop="medium" fontSize="large" color="#e84441">
            {product.description}
          </Text>
          
         
          <Divider marginTop="large" marginBottom="large" />
          
          <Flex direction="column" gap="small">
            <Flex>
              <Text fontWeight="bold" width="120px" color="#e84441">Category:</Text>
              <Text color="#e84441">{product.category}</Text>
            </Flex>
            <Flex>
              <Text fontWeight="bold" color="#e84441" width="120px">Condition:</Text>
              <Text color="#e84441">{product.condition}</Text>
            </Flex>
            <Flex>
              <Text color="#e84441" fontWeight="bold" width="120px">Seller:</Text>
              <Text color="#e84441">{product.seller}</Text>
            </Flex>
          </Flex>
          
          
          <Button 
            onClick={addToCart}
            variation="primary"
            backgroundColor="#B10F2E"
            width={isMobile ? "100%" : "200px"}
            size="large"
            marginTop="large"
          >
            Add to Cart
          </Button>
        </View>
      </Flex>
    </View>
  );
};

export default ProductDetails;
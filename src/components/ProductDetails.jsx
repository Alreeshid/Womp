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
  
  // This would typically come from an API or database
  // Using static data for this example
  const allProducts = [
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
    }
  ];
  
  // Find the product from our "database" based on the productId
  useEffect(() => {
    const foundProduct = allProducts.find(p => p.id === productId);
    
    if (foundProduct) {
      setProduct(foundProduct);
      // Could set document title here
      document.title = `Womper - ${foundProduct.title}`;
    } else {
      // Handle product not found
      console.error(`Product with ID ${productId} not found`);
      // Could navigate to a 404 page here
    }
  }, [productId]);
  
  // Handle go back button
  const goBack = () => {
    navigate(-1);
  };
  
  // Handle add to cart
  const addToCart = () => {
    // This would typically add the product to a cart in state or localStorage
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
      {/* Logo/Home Button */}
      <Button 
        variation="link"
        onClick={() => navigate('/')}
      >
        <h1>Womper</h1>
      </Button>
      
      {/* Navigation */}
      <NavigationBar />
      
      {/* Back Button */}
      <Button 
        onClick={goBack}
        variation="link"
        color="#B10F2E"
        marginTop="medium"
      >
        ← Back
      </Button>
      
      {/* Product Details */}
      <Flex 
        direction={isMobile ? "column" : "row"}
        padding="large"
        gap="large"
      >
        {/* Product Image */}
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
        
        {/* Product Info */}
        <View width={isMobile ? "100%" : "60%"}>
          <Heading level={2}>{product.title}</Heading>
          
          {/* Badges */}
          <Flex gap="0.5rem" wrap="wrap" marginTop="small">
            {product.badges.map((badge, index) => (
              <Badge
                key={`badge-${index}`}
                backgroundColor={
                  badge.toLowerCase().includes('used') ? '#E08D5F' : 
                  badge.toLowerCase().includes('$') ? '#B10F2E' : '#DE7C5A'
                }
                color="#FFFFFF"
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
          
          {/* Description */}
          <Text marginTop="medium" fontSize="large">
            {product.description}
          </Text>
          
          {/* Additional Details */}
          <Divider marginTop="large" marginBottom="large" />
          
          <Flex direction="column" gap="small">
            <Flex>
              <Text fontWeight="bold" width="120px">Category:</Text>
              <Text>{product.category}</Text>
            </Flex>
            <Flex>
              <Text fontWeight="bold" width="120px">Condition:</Text>
              <Text>{product.condition}</Text>
            </Flex>
            <Flex>
              <Text fontWeight="bold" width="120px">Seller:</Text>
              <Text>{product.seller}</Text>
            </Flex>
          </Flex>
          
          {/* Add to Cart */}
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
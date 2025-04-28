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
import { generateClient } from 'aws-amplify/data';

// Import all product images


const ProductDetails = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const client = generateClient({
    authMode: "userPool"
  })

  const isMobile = useBreakpointValue({
    base: true,
    small: true,
    medium: false,
    large: false,
    xl: false
  });

  async function getAllProds() {
    //Needs to then push onto the frontend
    let userList = [];
    let listings = await client.models.Products.list()
      .then(result => JSON.stringify(result))
    //console.log("Courtesy of Stanly! :D - ", listings)

    try { userList = JSON.parse(listings) }
    catch (errors) {
      console.log("Wuh?")
    }
    console.log(userList.data, "We're so back it's not even funny")
    return userList.data;
  }

  // Product database
  const allProducts = getAllProds() /*[

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
]
  */


  useEffect(() => {
    console.log("Looking for product with ID:", productId);
    async function getSpecificProd(){
    let prodArray = await getAllProds();
    let foundProduct;
    console.log("Products to search: ", prodArray)
    for (let x = 0; x < prodArray.length; x++) {
      if(prodArray[x].id == productId){
        foundProduct = prodArray[x]
        console.log("Found product: ", prodArray[x]);
      }
      else{
        console.log("Not this one! ", prodArray[x], prodArray[x].id)      }
    }

    if (foundProduct) {
      
      setProduct(foundProduct);
      document.title = `Womper - ${foundProduct.title}`;
    } else {
      console.error(`Product with ID ${productId} not found`);
    }
  }
  getSpecificProd()
  }, []);


  const goBack = () => {
    navigate(-1);
  };


  const addToCart = () => {
    //alert(`${product.title} added to cart!`);
    if(localStorage.getItem("prodName")){
    if (confirm("Warning, you already have a transaction in progress. Hit 'Ok' if you'd like to continue with your new transaction, or cancel to instead return to your original transaction:")) {
      //txt = "You pressed OK!";
      localStorage.setItem("prodName", product.productName)
    localStorage.setItem("prodPrice", product.listPrice)
    localStorage.setItem("prodSeller", product.sellerName)
    } else {
      //txt = "You pressed Cancel!";
      navigate("/Checkout")
    }
  }
  else{
    localStorage.setItem("prodName", product.productName)
    localStorage.setItem("prodPrice", product.listPrice)
    localStorage.setItem("prodSeller", product.sellerName)
    navigate("/Checkout")
  }
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
            src={product.productImage}
            alt={product.productName}
            style={{
              width: '100%',
              height: 'auto',
              maxHeight: '400px',
              objectFit: 'contain'
            }}
          />
        </View>


        <View width={isMobile ? "100%" : "60%"}>
          <Heading color="#e84441" level={2}>{product.productName}</Heading>


          <Flex gap="0.5rem" wrap="wrap" marginTop="small">
            {
              <Badge
                
                color="#e84441"
                style={{
                  padding: '0.25rem 0.5rem',
                  borderRadius: '1rem',
                  fontSize: '0.8rem',
                  fontWeight: '500'
                }}
              >
                {"$"+product.listPrice}
              </Badge>
            }
          </Flex>


          <Text marginTop="medium" fontSize="large" color="#e84441">
            {product.productDescription}
          </Text>


          <Divider marginTop="large" marginBottom="large" />

          <Flex direction="column" gap="small">
            <Flex>
              <Text fontWeight="bold" width="120px" color="#e84441"></Text>
              <Text color="#e84441">{}</Text>
            </Flex>
            <Flex>
              <Text fontWeight="bold" color="#e84441" width="120px">Condition:</Text>
              <Text color="#e84441">{product.condition}</Text>
            </Flex>
            <Flex>
              <Text color="#e84441" fontWeight="bold" width="120px">Seller:</Text>
              <Text color="#e84441">{product.sellerName}</Text>
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
            Purchase
          </Button>
        </View>
      </Flex>
    </View>
  );
};

export default ProductDetails;
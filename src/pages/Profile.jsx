import React from 'react';
import { useState, useEffect } from 'react';
import {
  View,
  Heading,
  Button,
  Card,
  Flex,
  Text,
  Divider,
  Badge,
  Image,
  useBreakpointValue
} from '@aws-amplify/ui-react';
import { useNavigate } from 'react-router-dom';
import NavigationBar from '../components/Navbar';
import Alex from "../images/AlexJohnson.jpg";
import '../index.css';
import { getCurrentUser } from 'aws-amplify/auth';
import { fetchUserAttributes } from 'aws-amplify/auth';
import { generateClient } from 'aws-amplify/data';

import { Authenticator } from '@aws-amplify/ui-react';

const client = generateClient({
  authMode: "userPool"
})

const user = getCurrentUser();



async function getSpecificUserListings() {
  //WIP
  let userList = [];
  let listings = await client.models.Products.list()
    .then(result => JSON.stringify(result))
  //console.log("Courtesy of Stanly! :D - ", listings)
  /*
    .then(result => {
      console.log("Results! ", result)
      userList = JSON.stringify(result)
      console.log("UserList Object Converted before returning: ", userList)
      //userList = JSON.stringify(listings);
    })
    */
  //.catch()

  //console.log(listings)
  /*
  for(let x=0; x < listings.length; x++){
      userList[x] = listings[x]
      console.log(userList[x], "Count: " +x+1)
      
  }
      */
  //console.log("RIGHT BEFORE RETURNING: ", userList)
  try { 
  //listings.forEach(element => {
  //    if(element.owner)
  //});
  userList = JSON.parse(listings) }
  catch (errors) {
    console.log("Wuh?")
  }
  console.log(userList.data.length, "We're so back it's not even funny")
  return userList.data;
}



function Profile() {
  /*
  let userEmail;
  
  async function getUserDetails(){
    try {
      let attributes = await fetchUserAttributes();
      //name = attributes;
      var email = attributes.email;
      //console.log(email)
      console.log("User Email: ", email)
  
      //Doesn't actually return the email oddly, need to fix - currently returns [object Promise]
      userEmail = email;
    } catch (err) {
      console.error(err);
      // ... handle error ...
    }
  }
  getUserDetails();
  */
  const [userEmail, setUserEmail] = useState(null);
  const [userId, setUserId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [userProds, setUserProds] = useState([]);
  const [userProfit, setUserProfit] = useState(0);

  useEffect(() => {
    async function fetchUserData() {
      try {
        setLoading(true);

        const userAttributes = await fetchUserAttributes()
        console.log(userAttributes.sub, "User AWS ID")

        const tempUserProds = await getSpecificUserListings();
        let userSpecificListings = [];
        console.log(tempUserProds)
        // Now we can safely access the email
        setUserEmail(userAttributes.email);
        //setUserId(userAttributes.sub)

        for (var x = 0; x < tempUserProds.length; x++) {
          //Grab user specific listings using the userAttributes.sub, which returns their user ID.
          if (tempUserProds[x].sellerID == userAttributes.sub ||
            tempUserProds[x].owner == userAttributes.sub) {
            userSpecificListings[x] = tempUserProds[x];
            console.log("User product found - Count " + x, userSpecificListings[x])
            if(tempUserProds[x].hasBeenSold){
              setUserProfit(+tempUserProds.listPrice)
            }
          }
          
          
        }
        console.log(userSpecificListings, "Completed User array of owned products")
        setUserProds(userSpecificListings)
      } catch (err) {
        console.error('Error fetching user attributes:', err);
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    fetchUserData();
  }, []);

  let name, listingCount;
  //getUserDetails();
  //let userProdList = getSpecificUserListings();
  //console.log("userProdList[0] - ", userProdList[0]);
  //console.log("User Listings Object after Conversion:", userProdList)


  const navigate = useNavigate();
  const isMobile = useBreakpointValue({
    base: true,
    small: true,
    medium: false,
    large: false
  });

  // Mock user data - replace with actual user data from your auth system
  const userData = {
    name: "UserNameErr",
    email: userEmail,
    joinDate: "April 2025",
    profileImage: Alex,
    listings: userProds.length,
    sold: "0",
  };

  // console.log("Userdata: ", userData.email)

  const recentActivityData =[
    //{ id: 1, type: "sale", item: "Leather Jacket", date: "2 days ago", price: "$45.00" },
    //{ id: 2, type: "purchase", item: "Wireless Headphones", date: "1 week ago", price: "$29.99" },
    { id: 3, type: "listing", item: "Vintage Camera", date: "2 weeks ago", price: "$85.50" }
  ];

  const goToHome = () => {
    navigate('/');
  };

  const goToCreateListing = () => {
    navigate('/CreateListing');
  };

  const goToManageListings = () => {
    navigate('/ManageListings');
  };

  const goToSavedItems = () => {
    navigate('/SavedItems');
  };

  const goToTransactions = () => {
    navigate('/Transactions');
  };

  return (
    <View style={{ backgroundColor: '#350000', minHeight: '100vh' }}>
      <Button
        variation="link"
        onClick={goToHome}
      >
        <h1 style={{ color: '#DE7C5A' }}>Womper</h1>
      </Button>
      <NavigationBar />

      <View padding="medium">
        {/* User Profile Header */}
        <Card
          variation="elevated"
          padding="large"
          marginBottom="large"
          borderRadius="large"
          backgroundColor="#232624"
        >
          <Flex direction={isMobile ? "column" : "row"} alignItems="center" gap="large">
            <Image
              //src={}
              alt="Profile"
              borderRadius="100%"
              width="150px"
              height="150px"
            />
            <Authenticator>
              <View>
                <Heading level={2} marginBottom="xs" color="#460000"><strong>Welcome Back, {userEmail}!</strong></Heading>
                <Text fontSize="medium" color="gray">{userData.email}</Text>
                <Text fontSize="small" color="red.80">Member since {userData.joinDate}</Text>

                <Flex marginTop="medium" gap="large">
                  <View textAlign="center">
                    <Text fontSize="xx-large" fontWeight="bold" color="#B10F2E">{userData.listings}</Text>
                    <Text color="red">Active Listings</Text>
                  </View>
                  <View textAlign="center">
                    <Text fontSize="xx-large" fontWeight="bold" color="#B10F2E">{userData.sold}</Text>
                    <Text color="red">Items Sold</Text>
                  </View>
                  <View textAlign="center">
                    <Text fontSize="xx-large" fontWeight="bold" color="#B10F2E">{"Err"}</Text>
                    <Text color="red">Total Profits</Text>
                  </View>
                </Flex>
              </View>
            </Authenticator>
          </Flex>
        </Card>

        {/* Quick Actions */}
        <Heading level={3} marginBottom="medium" color="#DE7C5A">Quick Actions</Heading>
        <Flex
          direction={isMobile ? "column" : "row"}
          gap="medium"
          marginBottom="large"
        >
          <Card
            variation="elevated"
            padding="medium"
            backgroundColor="#232624"
            borderRadius="large"
            style={{ flex: 1, cursor: 'pointer' }}
            onClick={goToCreateListing}
          >
            <Flex direction="column" alignItems="center" textAlign="center" gap="small">
              <Text fontSize="x-large" fontWeight="bold" color="#B10F2E">📝</Text>
              <Text fontWeight="bold" color="#e84441">Create New Listing</Text>
              <Text fontSize="small" color="#574c4b">List your items for sale</Text>
            </Flex>
          </Card>

          <Card
            variation="elevated"
            padding="medium"
            backgroundColor="#232624"
            borderRadius="large"
            style={{ flex: 1, cursor: 'pointer' }}
            onClick={goToManageListings}
          >
            <Flex direction="column" alignItems="center" textAlign="center" gap="small">
              <Text fontSize="x-large" fontWeight="bold" color="#B10F2E">🗂️</Text>
              <Text fontWeight="bold" color="#e84441">Manage Listings</Text>
              <Text fontSize="small" color="#574c4b">Edit or remove your listings</Text>
            </Flex>
          </Card>

          <Card
            variation="elevated"
            padding="medium"
            backgroundColor="#232624"
            borderRadius="large"
            style={{ flex: 1, cursor: 'pointer', display: 'none' }}
            onClick={goToSavedItems}
          >
            <Flex direction="column" alignItems="center" textAlign="center" gap="small">
              <Text fontSize="x-large" fontWeight="bold" color="#B10F2E">❤️</Text>
              <Text fontWeight="bold" color="#e84441">Saved Items - INACTIVE</Text>
              <Text fontSize="small" color="#574c4b">View your wishlist</Text>
            </Flex>
          </Card>

          <Card
            variation="elevated"
            padding="medium"
            backgroundColor="#232624"
            borderRadius="large"
            style={{ flex: 1, cursor: 'pointer', display: 'none'  }}
            onClick={goToTransactions}
            
          >
            <Flex direction="column" alignItems="center" textAlign="center" gap="small">
              <Text fontSize="x-large" fontWeight="bold" color="#B10F2E">💰</Text>
              <Text fontWeight="bold" color="#e84441">Transactions</Text>
              <Text fontSize="small" color="#574c4b">View purchase history</Text>
            </Flex>
          </Card>
        </Flex>

        {/* Recent Activity */}
        <Heading level={3} marginBottom="medium" color="#DE7C5A">Recent Activity</Heading>
        <Card
          variation="elevated"
          padding="medium"
          marginBottom="large"
          borderRadius="large"
          backgroundColor="#232624"
        >
          {userProds.length > 0 ? (
            userProds.map((activity, index) => (
              <React.Fragment key={activity.id}>
                <Flex alignItems="center" justifyContent="space-between" padding="small">
                  <Flex alignItems="center" gap="medium">
                    <Badge
                      backgroundColor={
                        activity.hasBeenSold === "False" ? "#4CAF50" :
                          activity.type === "purchase" ? "#2196F3" : "#DE7C5A"
                      }
                      color="white"
                      padding="xs small"
                      borderRadius="full"
                    >
                      {activity.hasBeenSold === "True" ? "Sold" :
                        activity.hasBeenSold === "False" ? "Null" : "Listed"}
                    </Badge>
                    <View>
                      <Text fontWeight="bold" color="#e84441">{activity.productName}</Text>
                      <Text fontSize="small" color="#574c4b">{activity.updatedAt}</Text>
                    </View>
                  </Flex>
                  <Text fontWeight="bold" color="#B10F2E">{activity.listPrice}</Text>
                </Flex>
                {index < recentActivityData.length - 1 && <Divider marginY="xs" />}
              </React.Fragment>
            ))
          ) : (
            <Text textAlign="center" padding="large" color="gray.60">No recent activity</Text>
          )}

          <Button
            variation="link"
            width="100%"
            marginTop="medium"
            color="#B10F2E"
          >
            View All Activity
          </Button>
        </Card>

        {/* Account Settings */}
        <Heading level={3} marginBottom="medium" color="#DE7C5A">Account Settings</Heading>
        <Flex direction={isMobile ? "column" : "row"} gap="medium" marginBottom="large">
          <Button
            variation="primary"
            backgroundColor="#B10F2E"
            borderRadius="medium"
          >
            Edit Profile
          </Button>
          <Button
            variation="primary"
            backgroundColor="#DE7C5A"
            borderRadius="medium"
          >
            Payment Methods
          </Button>

        </Flex>
      </View>
    </View>
  );
}

export default Profile;
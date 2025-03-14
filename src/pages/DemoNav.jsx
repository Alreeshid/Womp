import { useState, useEffect } from "react";
import { Button, Flex, View } from '@aws-amplify/ui-react';
import { Link } from "react-router-dom";



export default function DemoNav(){
    return (
        <View
          height="100vh"
          width="100%"
          backgroundColor="white"
        >
          <Flex
            direction="row"
            justifyContent="center"
            alignItems="center"
            height="100%"
            gap="medium"
          >
            <Link to="Login"><Button variation="primary">Login/Signup</Button> </Link>
            <Link to="Demo1"> <Button variation="primary">Ecommerce Landing Template</Button> </Link>
            <Link to="Admin/Landing"> <Button variation="primary">Admin Landing Template</Button> </Link>
          </Flex>
        </View>
      );
    };
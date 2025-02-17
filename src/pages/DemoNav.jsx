import { useState, useEffect } from "react";
import { Button, Flex, View } from '@aws-amplify/ui-react';


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
            <Button variation="primary">Login/Signup</Button>
            <Button variation="primary">Ecommerce Landing Template</Button>
            <Button variation="primary">Admin Landing Template</Button>
          </Flex>
        </View>
      );
    };
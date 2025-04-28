import React, { useState } from 'react';
import { 
  Card, 
  Heading, 
  Flex, 
  View, 
  TextField, 
  SelectField, 
  Button, 
  Text,
  Divider,
  Badge,
  Alert
} from '@aws-amplify/ui-react';

// Mock product data
const product = {
  name: "Premium Wireless Headphones",
  price: 149.99,
  shipping: "TBD",
  tax: price/100
};


function CheckoutPage() {
  const [showNotification, setShowNotification] = useState(true);
  const [processing, setProcessing] = useState(false);
  const [prod, setProd] = useState({})

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
  
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setProcessing(true);
    // Simulate processing
    setTimeout(() => {
      setProcessing(false);
      alert("This is a mock transaction! Moving to next steps...");
    }, 1500);
  };
  
  return (
    <Flex direction="column" maxWidth="1200px" margin="0 auto" padding="20px">
      {/* Notification Banner */}
      {showNotification && (
        <Alert
          variation="warning"
          isDismissible={true}
          onDismiss={() => setShowNotification(false)}
          heading="Demo Mode"
          marginBottom="16px"
        >
          This is a mock payment page. No actual payment information will be stored or processed.
        </Alert>
      )}
      
      <Heading level={3} marginBottom="16px">Checkout</Heading>
      
      <Flex direction={{ base: 'column', large: 'row' }} gap="24px">
        {/* Left Column - Payment Form */}
        <Card variation="elevated" flex="3" padding="24px">
          <form onSubmit={handleSubmit}>
            <Heading level={5} marginBottom="16px">Shipping Information</Heading>
            
            <Flex direction="row" gap="16px" marginBottom="16px">
              <TextField
                label="First Name"
                name="firstName"
                placeholder="First Name"
                defaultValue="John"
                isRequired
                flex="1"
              />
              <TextField
                label="Last Name"
                name="lastName"
                placeholder="Last Name"
                defaultValue="Smith"
                isRequired
                flex="1"
              />
            </Flex>
            
            <TextField
              label="Address Line 1"
              name="address1"
              placeholder="Street Address"
              defaultValue="123 Main Street"
              isRequired
              marginBottom="16px"
            />
            
            <TextField
              label="Address Line 2"
              name="address2"
              placeholder="Apt, Suite, Unit, etc."
              defaultValue="Apt 4B"
              marginBottom="16px"
            />
            
            <Flex direction="row" gap="16px" marginBottom="16px">
              <TextField
                label="City"
                name="city"
                placeholder="City"
                defaultValue="San Francisco"
                isRequired
                flex="1"
              />
              <SelectField
                label="State"
                name="state"
                defaultValue="CA"
                isRequired
                flex="1"
              >
                <option value="CA">California</option>
                <option value="NY">New York</option>
                <option value="TX">Texas</option>
                <option value="FL">Florida</option>
              </SelectField>
              <TextField
                label="ZIP Code"
                name="zipCode"
                placeholder="ZIP Code"
                defaultValue="94105"
                isRequired
                flex="1"
              />
            </Flex>
            
            <Divider marginBottom="24px" marginTop="24px" />
            
            <Heading level={5} marginBottom="16px">Payment Information</Heading>
            
            <TextField
              label="Card Number"
              name="cardNumber"
              placeholder="Card Number"
              defaultValue="4111 1111 1111 1111"
              isRequired
              marginBottom="16px"
            />
            
            <Flex direction="row" gap="16px" marginBottom="16px">
              <TextField
                label="Cardholder Name"
                name="cardholderName"
                placeholder="Name on Card"
                defaultValue="John Smith"
                isRequired
                flex="2"
              />
              <TextField
                label="Expiration Date"
                name="expiryDate"
                placeholder="MM/YY"
                defaultValue="12/25"
                isRequired
                flex="1"
              />
              <TextField
                label="CVV"
                name="cvv"
                placeholder="CVV"
                defaultValue="123"
                type="password"
                isRequired
                flex="1"
              />
            </Flex>
            
            <Divider marginBottom="24px" marginTop="24px" />
            
            <Heading level={5} marginBottom="16px">Contact Information</Heading>
            
            <TextField
              label="Email"
              name="email"
              placeholder="Email Address"
              defaultValue="john.smith@example.com"
              isRequired
              marginBottom="16px"
            />
            
            <TextField
              label="Phone Number"
              name="phone"
              placeholder="Phone Number"
              defaultValue="(555) 123-4567"
              marginBottom="24px"
            />
            
            <Button
              type="submit"
              variation="primary"
              isFullWidth
              isLoading={processing}
              loadingText="Processing..."
            >
              {processing ? "Processing..." : "Proceed to Next Steps"}
            </Button>
          </form>
        </Card>
        
        {/* Right Column - Order Summary */}
        <Card variation="elevated" flex="1" padding="24px">
          <Heading level={5} marginBottom="16px">Order Summary</Heading>
          
          <Flex direction="row" alignItems="center" marginBottom="16px">
            <View
              backgroundColor="lightgray"
              width="80px"
              height="80px"
              borderRadius="8px"
              marginRight="16px"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Text>Product</Text>
            </View>
            <Flex direction="column">
              <Text fontWeight="bold">{product.name}</Text>
              <Text>Qty: 1</Text>
              <Text fontSize="small" color="gray">#SKU12345</Text>
            </Flex>
          </Flex>
          
          <Divider marginBottom="16px" />
          
          <Flex direction="row" justifyContent="space-between" marginBottom="8px">
            <Text>Subtotal</Text>
            <Text>${product.price.toFixed(2)}</Text>
          </Flex>
          
          <Flex direction="row" justifyContent="space-between" marginBottom="8px">
            <Text>Shipping</Text>
            <Text>${product.shipping.toFixed(2)}</Text>
          </Flex>
          
          <Flex direction="row" justifyContent="space-between" marginBottom="16px">
            <Text>Tax</Text>
            <Text>${product.tax.toFixed(2)}</Text>
          </Flex>
          
          <Divider marginBottom="16px" />
          
          <Flex direction="row" justifyContent="space-between" marginBottom="8px">
            <Text fontWeight="bold">Total</Text>
            <Text fontWeight="bold">${(product.price + product.shipping + product.tax).toFixed(2)}</Text>
          </Flex>
          
          <Flex direction="row" alignItems="center" gap="8px" marginTop="24px">
            <Badge variation="success">SECURE</Badge>
            <Text fontSize="small" color="gray">Your information is protected</Text>
          </Flex>
        </Card>
      </Flex>
    </Flex>
  );
}
export default CheckoutPage;
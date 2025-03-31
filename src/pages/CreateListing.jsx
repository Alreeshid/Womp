import React, { useState } from 'react';
import { 
  View, 
  Button, 
  Heading, 
  TextField, 
  TextAreaField, 
  SelectField, 
  Flex,
  Divider,
  Card,
  Text
} from '@aws-amplify/ui-react';
import { useNavigate } from 'react-router-dom';
import NavigationBar from '../components/Navbar';
import { generateClient } from 'aws-amplify/data';
import { uploadData } from 'aws-amplify/storage';
import { getCurrentUser } from 'aws-amplify/auth';

const client = generateClient({
  authMode: "userPool"
})

const user = getCurrentUser();
console.log(user + "This is you!")

async function addProduct(form){
  //event.preventDefault();

  //const formSubmitted = new FormData(form);
  console.log(form.get("image").name);
  //const user = getCurrentUser();
  
  const {data: newProduct} = await client.models.Products.create({
    productName: form.productName,
    sellerID: (await user).userId,
    productDescription: form.productDescription,
    productImages: "Test for now",
    purchasedPrice: form.purchasedForPrice,
    listPrice: form.listPrice,
    condition: form.condition,
    tags: "Test for now",
    listedAt: new Date()
  })
  
  /* 
  .model({
      productID: a.id(),
      sellerID: a.id(),
      productName: a.string(),
      productDescription: a.string(),
      productImages: a.hasMany("image", "String"),
      purchasedPrice: a.float(),
      listPrice: a.float(),
      condition: a.string(),
      tags: a.string(),
      listedAt: a.datetime()
    })
  */
}

function CreateListing() {
  const navigate = useNavigate();
  const [tags, setTags] = useState([]);
  const [currentTag, setCurrentTag] = useState('');
  
  const [form, setForm] = useState({
    productName: '',
    purchasedForPrice: '',
    listPrice: '',
    productDescription: '',
    condition: 'New',
    productImages: [], 
    productTags: []
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    });
  };
  
  const addTag = () => {
    if (currentTag.trim() !== '') {
      setTags([...tags, currentTag.trim()]);
      setForm({
        ...form,
        productTags: [...form.productTags, currentTag.trim()]
      });
      setCurrentTag('');
    }
  };
  
  const removeTag = (tagToRemove) => {
    const updatedTags = tags.filter(tag => tag !== tagToRemove);
    setTags(updatedTags);
    setForm({
      ...form,
      productTags: updatedTags
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', form);
    const form2 = new FormData(form)
    addProduct(form2);
    navigate('/profile');
  };
  
  const goHome = () => {
    navigate('/'); 
  };

  return (
    <View padding="medium">
      <Button 
        variation="link"
        onClick={goHome}
      >
        <h1>Womper</h1>
      </Button>
      <NavigationBar />
      <Card padding="large" marginTop="medium">
        <Heading level={1} marginBottom="medium">Create a Listing</Heading>
        
        <form onSubmit={handleSubmit}>
          <Flex direction="column" gap="medium">
            <TextField
              label="Product Name"
              name="productName"
              value={form.productName}
              onChange={handleChange}
              required
              placeholder="Enter the name of your product"
            />
            
            <Flex direction={{ base: 'column', medium: 'row' }} gap="medium">
              <TextField
                label="Purchase Price (Only visible to you)"
                name="purchasedForPrice"
                type="number"
                step="0.01"
                min="0"
                value={form.purchasedForPrice}
                onChange={handleChange}
                placeholder="How much did you pay for it?"
              />
              
              <TextField
                label="Listing Price"
                name="listPrice"
                type="number"
                step="0.01"
                min="0"
                value={form.listPrice}
                onChange={handleChange}
                required
                placeholder="How much are you selling it for?"
              />
            </Flex>
            
            <TextAreaField
              label="Product Description"
              name="productDescription"
              value={form.productDescription}
              onChange={handleChange}
              required
              rows={5}
              placeholder="Describe your product in detail"
            />
            
            <SelectField
              label="Condition"
              name="condition"
              value={form.condition}
              onChange={handleChange}
              required
            >
              <option value="New">New</option>
              <option value="Like New">Like New</option>
              <option value="Very Good">Very Good</option>
              <option value="Good">Good</option>
              <option value="Acceptable">Acceptable</option>
              <option value="Refurbished">Refurbished</option>
            </SelectField>
            
            
            <View>
              <Text fontWeight="bold" marginBottom="xs">Product Images</Text>
              <Button variation="primary" marginBottom="medium">Upload Images</Button>
              
            </View>
            
            <Divider />
            
            
            <View>
              <Text fontWeight="bold" marginBottom="xs">Product Tags</Text>
              <Text fontSize="small" marginBottom="xs">Add tags to help buyers find your product</Text>
              
              <Flex direction="row" alignItems="flex-start" gap="xs">
                <TextField
                  placeholder="Enter a tag"
                  value={currentTag}
                  onChange={(e) => setCurrentTag(e.target.value)}
                  width="70%"
                />
                <Button onClick={addTag} variation="primary">Add</Button>
              </Flex>
              
              <Flex direction="row" wrap="wrap" gap="xs" marginTop="small">
                {tags.map((tag, index) => (
                  <Button 
                    key={index}
                    variation="link"
                    backgroundColor="rgba(177, 15, 46, 0.1)"
                    color="#B10F2E"
                    onClick={() => removeTag(tag)}
                  >
                    {tag} ✕
                  </Button>
                ))}
              </Flex>
            </View>
            
            {/* Submit Button */}
            <Flex justifyContent="center" marginTop="large">
              <Button 
                variation="primary" 
                type="submit"
                width={{ base: '100%', medium: 'auto' }}
                size="large"
              >
                Create Listing
              </Button>
            </Flex>
          </Flex>
        </form>
      </Card>
    </View>
  );
}

export default CreateListing;
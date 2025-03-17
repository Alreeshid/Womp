import { 
  Card, 
  Heading, 
  Image,
  View,
  Flex,
  Badge,
  Divider,
  Button 
} from '@aws-amplify/ui-react';

const ProductCard = ({ title, badges, image, onClick }) => {
  return (
    <Card
      borderRadius="medium"
      maxWidth="15rem"
      variation="outlined"
      onClick={onClick}
      style={{ display: 'flex', flexDirection: 'column', height: '100%' }}
    >
      <Image
        src={image}
        alt={`${title} image`}
        style={{
          width: '300px',     
          height: '200px',    
          objectFit: 'cover'  
        }} 
      />
      <View padding="xs" style={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
        <Flex>
          {badges.map((badge) => (
            <Badge
              key={badge}
              backgroundColor="#DE7C5A"
              color="#FFFFFF"
            >
              {badge}
            </Badge>
          ))}
        </Flex>
        <Divider padding="m" />
        <Heading 
          padding="medium" 
          level={5}
          style={{ 
            height: '50px', 
            overflow: 'hidden',
            marginBottom: 'auto'
          }}
        >
          {title}
        </Heading>
        <Button 
          backgroundColor="#B10F2E" 
          variation="primary" 
          isFullWidth
          marginTop="auto"
        >
          View Details
        </Button>
      </View>
    </Card>
  );
};

export default ProductCard;
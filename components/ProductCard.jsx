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

const ProductCard = ({ title, badges, image }) => {
  return (

    <Card
      borderRadius="medium"
      maxWidth="15rem"
      variation="outlined"
     
    >
      <Image
        
        src={image}
        alt={`${title} image`}
        style={{
          width: '200px',     
          height: '200px',    
          objectFit: 'cover'  
        }} 
      />
      <View padding="xs">
        <Flex>
          {badges.map((badge) => (
            <Badge
              key={badge}
              backgroundColor="#DE7C5A"
              color = "#FFFFFF"
            >
              {badge}
            </Badge>
          ))}
        </Flex>
        <Divider padding="m" />
        <Heading padding="medium">{title}</Heading>
        <Button backgroundColor = "#B10F2E"variation="primary" isFullWidth>
          View Details
        </Button>
      </View>
    </Card>
  );
};

export default ProductCard;
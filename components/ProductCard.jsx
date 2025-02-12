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
      />
      <View padding="xs">
        <Flex>
          {badges.map((badge) => (
            <Badge
              key={badge}
              backgroundColor="yellow.40"
            >
              {badge}
            </Badge>
          ))}
        </Flex>
        <Divider padding="xs" />
        <Heading padding="medium">{title}</Heading>
        <Button variation="primary" isFullWidth>
          View Details
        </Button>
      </View>
    </Card>
  );
};

export default ProductCard;
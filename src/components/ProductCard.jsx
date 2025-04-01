import { 
  Card, 
  Heading, 
  Image,
  View,
  Flex,
  Badge,
  Button,
  useBreakpointValue
} from '@aws-amplify/ui-react';
import React from 'react';

const ProductCard = ({ title, badges, image, onClick }) => {
  // Use Amplify UI's responsive hook to detect screen size
  const isMobile = useBreakpointValue({
    base: true,
    small: true,
    medium: false,
    large: false,
    xl: false
  });

  return (
    <Card
      borderRadius="large"
      variation="elevated"
      onClick={onClick}
      style={{ 
        display: 'flex', 
        flexDirection: 'column',
        height: '100%',
        width: '100%',
        minWidth: isMobile ? '100%' : '200px',
        maxWidth: '300px',
        padding: '0',
        overflow: 'hidden',
        backgroundColor: 'white'
      }}
    >
      <Image
        src={image}
        alt={`${title} image`}
        style={{
          width: '100%',     
          height: '200px',
          objectFit: 'cover',
          borderRadius: '0'
        }} 
      />
      <View 
        padding="medium"
        style={{ 
          display: 'flex', 
          flexDirection: 'column',
          gap: '1rem'
        }}
      >
        <Flex gap="0.5rem" wrap="wrap">
          {badges.map((badge) => (
            <Badge
              key={badge}
              backgroundColor={
                badge.toLowerCase().includes('used') ? '#E08D5F' : '#DE7C5A'
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
        
        <Heading 
          level={5}
          style={{ 
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            fontSize: '1rem',
            fontWeight: '600',
            margin: '0',
            minHeight: '2.5em'
          }}
        >
          {title}
        </Heading>
        
        <Button 
          backgroundColor="#B10F2E" 
          variation="primary" 
          isFullWidth
          style={{ 
            marginTop: 'auto',
            borderRadius: '0.25rem',
            fontWeight: '600',
            padding: '0.75rem 1rem'
          }}
        >
          View Details
        </Button>
      </View>
    </Card>
  );
};

export default ProductCard;
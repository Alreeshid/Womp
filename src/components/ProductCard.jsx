import { 
  Card, 
  Heading, 
  Image,
  View,
  Flex,
  Badge,
  Divider,
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
      borderRadius="medium"
      variation="outlined"
      onClick={onClick}
      style={{ 
        display: 'flex', 
        flexDirection: 'column',
        height: '100%',
        width: '100%',
        minWidth: isMobile ? '100%' : '150px',
      }}
    >
      <Image
        src={image}
        alt={`${title} image`}
        style={{
          width: '200px',     
          height: '200px',
          aspectRatio: '3/2',
          objectFit: 'cover'  
        }} 
      />
      <View 
        padding={{ base: 'xs', large: 'sm' }} 
        style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          flexGrow: 1,
          gap: '0.5rem'
        }}
      >
        <Flex gap="0.25rem" wrap="wrap">
          {badges.map((badge) => (
            <Badge
              key={badge}
              backgroundColor="#DE7C5A"
              color="#FFFFFF"
              style={{ 
                padding: '0.2rem 0.5rem',
                margin: '0.1rem',
                fontSize: 'clamp(0.6rem, 2vw, 0.8rem)'
              }}
            >
              {badge}
            </Badge>
          ))}
        </Flex>
        <Divider style={{ margin: '0.5rem 0' }} />
        <Heading 
          level={5}
          style={{ 
            minHeight: '2.5em',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            fontSize: 'clamp(0.9rem, 3vw, 1.1rem)',
            marginBottom: 'auto'
          }}
        >
          {title}
        </Heading>
        <Button 
          backgroundColor="#B10F2E" 
          variation="primary" 
          isFullWidth
          size={isMobile ? "medium" : "small"}
          fontSize="clamp(0.8rem, 2.5vw, 1rem)"
          style={{ 
            marginTop: 'auto',
            padding: isMobile ? '0.5rem 1rem' : 'clamp(0.3rem, 2vw, 0.75rem) clamp(0.5rem, 3vw, 1rem)'
          }}
        >
          View Details
        </Button>
      </View>
    </Card>
  );
};

export default ProductCard;
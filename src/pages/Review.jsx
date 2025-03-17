import React from 'react';
import { 
  View,
  Button
} from '@aws-amplify/ui-react';
import NavigationBar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';
import '../index.css';
function Review() {
  const navigate = useNavigate();
    
    const goHome = () => {
      navigate('/'); 
    };

    return(
<View padding="medium">
     <Button 
             variation="link"
             onClick={goHome}
           >
             <h1>Womper</h1>
           </Button>
      <NavigationBar />
      <h1>Did you enjoy your experience?</h1>
</View>
    );
   
}

export default Review;
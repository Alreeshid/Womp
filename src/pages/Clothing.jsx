import React from 'react';
import { 
  View,
  Button
} from '@aws-amplify/ui-react';
import NavigationBar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';
import '../index.css';
function Clothing() {
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
      <h1>Pikachu</h1>
</View>
    );
   
}

export default Clothing;
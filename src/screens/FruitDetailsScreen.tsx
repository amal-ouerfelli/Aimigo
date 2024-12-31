// src/screens/FruitDetailsScreen.tsx
import FruitDetails from '../components/FruitDetail/FruitDetails';
import React from 'react';
import { SafeAreaView } from 'react-native';


const FruitDetailsScreen = ({ route}) => {
  const { fruit } = route.params;
 

  return (
    <SafeAreaView>
      <FruitDetails fruit={fruit}  />
    </SafeAreaView>
  ); 
};



export default FruitDetailsScreen;

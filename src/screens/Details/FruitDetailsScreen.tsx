// src/screens/FruitDetailsScreen.tsx
import FruitDetails from '../../components/FruitDetail/FruitDetails';
import React from 'react';
import { SafeAreaView, Button } from 'react-native';


const FruitDetailsScreen = ({ route, navigation, addToFavorites, removeFromFavorites, isFavorite }) => {
  const { fruit } = route.params;
 

  return (
    <SafeAreaView>
      <FruitDetails fruit={fruit}  />
    </SafeAreaView>
  ); 
};



export default FruitDetailsScreen;

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import FruitsList from '../src/screens/List/FruitsListScreen';
import FruitDetailsScreen from '../src/screens/Details/FruitDetailsScreen'

const Stack = createStackNavigator();

const FruitsNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="FruitsList">
    <Stack.Screen name="FruitsList" component={FruitsList} />
    <Stack.Screen name="FruitDetails" component={FruitDetailsScreen} />
  </Stack.Navigator>
  );
};

export default FruitsNavigator;

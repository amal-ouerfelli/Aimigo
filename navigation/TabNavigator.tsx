import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import FavoritesScreen from '../src/screens/FavoritesScreen';
import { createStackNavigator } from '@react-navigation/stack';
import FruitDetailsScreen from '../src/screens/FruitDetailsScreen';
import FruitsListScreen from '../src/screens/FruitsListScreen';

const Tab = createBottomTabNavigator();

const Stack= createStackNavigator()

const TabNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Accueil') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Favoris') {
              iconName = focused ? 'heart' : 'heart-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Accueil" component={FruitsNavigator} />
        <Tab.Screen name="Favoris" component={FavoritesScreen} />
      </Tab.Navigator>
      </NavigationContainer>

  );
};
const FruitsNavigator = ({ favorites, addToFavorites, removeFromFavorites, isFavorite }) => {
    return (
      <Stack.Navigator initialRouteName="FruitsList">
        <Stack.Screen name="FruitsList" options={{headerShown:false}}>
          {() => (
            <FruitsListScreen
              addToFavorites={addToFavorites}
              removeFromFavorites={removeFromFavorites}
              isFavorite={isFavorite}
            />
          )}
        </Stack.Screen>
        <Stack.Screen name="FruitDetails" options={{headerShown:false}}>
          {({ route}) => (
            <FruitDetailsScreen
              route={route}
            />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    );
  };
  

export default TabNavigator;

// src/components/FruitDetails.tsx
import React, { useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Fruit } from '../../types/types';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../../redux/favoritesSlice';
import { RootState } from '../../redux/store';
import DetailsItem from './DetailsItem';
import { ScrollView } from 'react-native-gesture-handler';


type FruitDetailsProps = {
  fruit: Fruit;
};

const FruitDetails: React.FC<FruitDetailsProps> =({ fruit }) => {
  const dispatch = useDispatch();  
  const favorites =  useSelector((state: RootState) => state.favorites)    
  const isFavorite = favorites?.includes(fruit.name);

  const translateY = useSharedValue(-50);
  const opacity = useSharedValue(0);

  useEffect(() => {
    translateY.value = withTiming(0, { duration: 1200 });
    opacity.value = withTiming(1, { duration: 1200 });
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
    opacity: opacity.value,
  }));


  return (
    <ScrollView>
      <View style={styles.container}>
        <Animated.Image
          source={{ uri: 'https://www.noovomoi.ca/content/dam/style-de-vie/uploadImg/2023/4/3/fruits-meconnus-hero.jpg' }}
          style={[styles.image, animatedStyle]}
        />
        <Text style={styles.name}>{fruit?.name}</Text>
        <View style={styles.detailsContainer}>
          <Text style={styles.title}>Les données de base</Text>
          <View style={styles.infoView}>
            <DetailsItem title="Genre:" content={fruit?.genus} />
            <DetailsItem title={"Famille:"} content={fruit?.family} />
            <DetailsItem title={"Ordre:"} content={fruit?.order} />
          </View>
        </View>
        {/* Nutritional Info */}
        <View style={styles.tableContainer}>
          <Text style={styles.title}>Les Valeurs Nutritionnelles</Text>
          <View style={styles.table}>
            <View style={[styles.row, styles.header]}>
              <Text style={styles.cellHeader}>Nutriment</Text>
              <Text style={styles.cellHeader}>Quantité</Text>
            </View>
            <DetailsItem title={"Carbohydrates"} content={fruit.nutritions.carbohydrates.toString() + ' g'} table={true} />
            <DetailsItem title={"Proteines"} content={fruit.nutritions.protein.toString() + ' g'} table={true} />
            <DetailsItem title={"Lipides"} content={fruit.nutritions.fat.toString() + ' g'} table={true} />
            <DetailsItem title={"Calories"} content={fruit.nutritions.calories.toString() + ' kcal'} table={true} />

            <DetailsItem title={"Glucides"} content={fruit.nutritions.sugar.toString() + ' g'} table={true} />

          </View>
        </View>
        <View style={styles.Viewbutton}>
          <Button color={isFavorite ? 'red' : '#82C46C'} title={isFavorite ? 'Retirer des Favoris' : 'Ajouter aux Favoris'} onPress={() =>
            isFavorite
              ? dispatch(removeFavorite(fruit.name))
              : dispatch(addFavorite(fruit.name))
          } />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 20,
    borderRadius: 10,
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  title: {
    fontWeight: '800',
    fontSize: 16,
    color: "#82C46C",
    marginBottom: 10
  },
  detailsContainer: {
    marginVertical: 16,
  },
  infoView: {
    marginLeft: 16
  },
  tableContainer: {
    marginTop: 16,
  },
  table: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    overflow: 'hidden',
  },
  row: {
    flexDirection: 'row',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  header: {
    backgroundColor: '#82C46C',
  },
  cellHeader: {
    flex: 1,
    fontWeight: 'bold',
    fontSize: 16,
  },
  Viewbutton: {
    marginVertical: 10
  }
});

export default FruitDetails;

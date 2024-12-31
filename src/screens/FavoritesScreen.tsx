import React from 'react';
import { View, Text, FlatList, StyleSheet, Button } from 'react-native';
import { RootState } from '../redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { clearFavorites, removeFavorite } from '../redux/favoritesSlice';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const FavoritesScreen = () => {
  const dispatch = useDispatch();
  const favorites = useSelector((state: RootState) => state.favorites);

  return (
    <View style={styles.container}>
      {favorites.length != 0 ?
        <>
          <View style={styles.header}>
            <Text style={styles.title}>Liste des Favoris</Text>
            <Button onPress={() => dispatch(clearFavorites())} color={'red'} title='Vider la Liste'></Button>
          </View>
          <FlatList
            data={favorites}
            keyExtractor={(item) => item}
            renderItem={({ item }) =>
              <View style={styles.item}>
                <Text style={styles.title}>{item}</Text>
                <MaterialCommunityIcons name="trash-can" size={24} color="red" onPress={() => dispatch(removeFavorite(item))} />
              </View>
            }
          />
        </> :
        <View style={styles.noFavorisView}>
          <Text style={styles.title}> Aucun Fruit Favoris</Text>
        </View>
      }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginBottom: 50
  },
  header: {
    flexDirection: 'row',
    marginVertical: 10,
    justifyContent: 'space-between'
  },
  noFavorisView: {
    alignItems: 'center',
    marginTop: 25
  },
  title: {
    fontWeight: '800',
    fontSize: 16,
    marginTop: 10
  },
  clear: {
    fontWeight: '800',
    fontSize: 16,
    color: 'red'
  },
  item: {
    flexDirection: 'row',
    marginHorizontal: 20,
    justifyContent: 'space-between',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },

})

export default FavoritesScreen;

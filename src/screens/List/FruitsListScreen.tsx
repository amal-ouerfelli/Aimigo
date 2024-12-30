import React, { useState } from 'react';
import { FlatList, Text, StyleSheet, ActivityIndicator, SafeAreaView } from 'react-native';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useNavigation } from '@react-navigation/native';
import FruitFilter from '../../components/FruitsList/FruitFilter';
import FruitItem from '../../components/FruitsList/FruitItem';
import { Fruit } from '../../types/types';


// Fonction de récupération des fruits
const fetchFruits = async ({ pageParam = 0 }) => {
  const response = await fetch(`https://www.fruityvice.com/api/fruit/all`);
  const data: Fruit[] = await response.json();
 // return data;

  // Simuler une pagination côté client
  const itemsPerPage = 10;
  const start = pageParam * itemsPerPage;
  const end = start + itemsPerPage;
  const paginatedData = data.slice(start, end);
  
  return { data: paginatedData, nextPage: pageParam + 1, hasMore: end < data.length };
};


const FruitsListScreen = () => {
  const navigation= useNavigation()
  const [filter, setFilter] = useState(''); // Pour stocker le filtre saisi
  
  const { data, 
    fetchNextPage, 
    hasNextPage, 
    isFetchingNextPage } = useInfiniteQuery({
    queryKey: ['fruits'],
    queryFn: fetchFruits,
    getNextPageParam: (lastPage) => (lastPage.hasMore ? lastPage.nextPage : undefined),
    initialPageParam: 0, // Ajout de la page initiale
  });

  const loadMore = () => {
    if (hasNextPage) {
      fetchNextPage();
    }
  };
  
  const allItems = data?.pages.flatMap((page) => page.data);

  const renderFooter = () => {
    if (!isFetchingNextPage) return null;
    return <ActivityIndicator style={styles.loader} />;
  };

  // Appliquer les filtres
  const filteredFruits = allItems?.filter((fruit) => {
    const matchesFilter = fruit.name.toLowerCase().includes(filter.toLowerCase());
    return matchesFilter;
  });

  const renderItem = ({ item }: { item: Fruit }) => (
    <FruitItem item={item} onPress={()=>navigation.navigate('FruitDetails',{fruit:item})}/>
  );

  return (
    <SafeAreaView style={styles.container}>
       <FruitFilter
        filter={filter}
        setFilter={setFilter}
      />
      <FlatList
        data={filteredFruits}
        renderItem={renderItem}
        keyExtractor={(item, index) => item.name + index}
        onEndReached={loadMore}
      onEndReachedThreshold={0.5}
      ListFooterComponent={renderFooter}
      testID="flatlist"

      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#fff',
  },
  loader: {
    marginVertical: 20,
  },
});

export default FruitsListScreen;

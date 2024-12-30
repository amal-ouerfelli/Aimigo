// src/components/FruitItem.tsx
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Fruit } from '../../types/types';

type FruitItemProps = {
  item: Fruit;
  onPress?: () => void;
};

const FruitItem: React.FC<FruitItemProps> = ({ item, onPress }) => {
  const [img, setImg] = useState<string>('https://www.pourquoidocteur.fr/media/article/ggl1200_istock-529664572-1674231819.jpg')
  const GetImage = async () => {
    const response = await fetch(`https://api.unsplash.com/search/photos?query=${item?.name}&client_id=iZ6Cr1tUnXRB7ev3PEBI7flyX7KsFnTxhQY4AoM-99M`);
    const data = await response.json();
    setImg(data.results[0]?.urls?.small); // Retourne l'URL de la première image trouvée
  }
  GetImage()
  return (
    <TouchableOpacity style={styles.item} onPress={onPress}>
      <View style={styles.viewItem}>
        <Image
          source={{ uri: img }}
          style={styles.image}
        />
        <Text style={styles.name}>{item.name}</Text>
      </View>

    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 15,
    marginLeft: 15
  },
  viewItem: {
    flexDirection: 'row',
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 45
  }
});

export default FruitItem;

import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

interface FruitFilterProps {
  filter: string;
  setFilter: (value: string) => void;
}

const FruitFilter: React.FC<FruitFilterProps> = ({
  filter,
  setFilter,
}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Rechercher un fruit..."
        value={filter}
        onChangeText={setFilter}
        testID='filter-input'
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 8,
    paddingHorizontal: 8,
    borderRadius: 8,
  }
});

export default FruitFilter;

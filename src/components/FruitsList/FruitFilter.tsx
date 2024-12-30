import React from 'react';
import { View, TextInput, StyleSheet, Text, Modal, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';

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
        testID='search'
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
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
    color: '#333',
  },
  pickerWrapper: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#f9f9f9',
  },
  picker: {
    height: 160,
    fontSize: 14,
    color: '#333',
  },
});

export default FruitFilter;

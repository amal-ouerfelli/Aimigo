import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import FruitFilter from '../components/FruitsList/FruitFilter';

describe('FruitFilter Component', () => {
  it('renders correctly and responds to input changes', () => {
    const mockSetFilter = jest.fn();
    const { getByTestId } = render(
      <FruitFilter filter="" setFilter={mockSetFilter} />
    );

    const input = getByTestId('filter-input');

    // Vérifie que le TextInput est rendu
    expect(input).toBeTruthy();

    // Simule une saisie utilisateur
    fireEvent.changeText(input, 'Apple');

    // Vérifie que la fonction setFilter est appelée avec la bonne valeur
    expect(mockSetFilter).toHaveBeenCalledWith('Apple');
  });
});
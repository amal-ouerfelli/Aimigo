import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import FruitsListScreen from './FruitsListScreen';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useNavigation } from '@react-navigation/native';

jest.mock('@tanstack/react-query', () => ({
  useInfiniteQuery: jest.fn(),
}));

jest.mock('@react-navigation/native', () => ({
  useNavigation: jest.fn(() => ({
    navigate: jest.fn(),
  })),
}));

jest.mock('../../components/FruitsList/FruitItem', () => 'FruitItem');
jest.mock('../../components/FruitsList/FruitFilter', () => 'FruitFilter');

describe('FruitsListScreen', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders the list of fruits correctly', () => {
    (useInfiniteQuery as jest.Mock).mockReturnValue({
      data: {
        pages: [
          {
            data: [
              { name: 'Apple', genus: 'Malus', family: 'Rosaceae', order: 'Rosales' },
              { name: 'Banana', genus: 'Musa', family: 'Musaceae', order: 'Zingiberales' },
            ],
          },
        ],
      },
      fetchNextPage: jest.fn(),
      hasNextPage: false,
      isFetchingNextPage: false,
    });

    const { getByText } = render(<FruitsListScreen />);

    expect(getByText('Apple')).toBeTruthy();
    expect(getByText('Banana')).toBeTruthy();
  });

  it('filters the list of fruits based on the search term', async () => {
    (useInfiniteQuery as jest.Mock).mockReturnValue({
      data: {
        pages: [
          {
            data: [
              { name: 'Apple', genus: 'Malus', family: 'Rosaceae', order: 'Rosales' },
              { name: 'Banana', genus: 'Musa', family: 'Musaceae', order: 'Zingiberales' },
            ],
          },
        ],
      },
      fetchNextPage: jest.fn(),
      hasNextPage: false,
      isFetchingNextPage: false,
    });

    const { getByPlaceholderText, getByText, queryByText } = render(<FruitsListScreen />);
    const filterInput = getByPlaceholderText('Rechercher un fruit...');

    fireEvent.changeText(filterInput, 'Banana');

    await waitFor(() => {
      expect(getByText('Banana')).toBeTruthy();
      expect(queryByText('Apple')).toBeNull();
    });
  });

  it('calls fetchNextPage when reaching the end of the list', () => {
    const mockFetchNextPage = jest.fn();
    (useInfiniteQuery as jest.Mock).mockReturnValue({
      data: {
        pages: [
          {
            data: [
              { name: 'Apple', genus: 'Malus', family: 'Rosaceae', order: 'Rosales' },
            ],
          },
        ],
      },
      fetchNextPage: mockFetchNextPage,
      hasNextPage: true,
      isFetchingNextPage: false,
    });

    const { getByTestId } = render(<FruitsListScreen />);

    const flatList = getByTestId('flatlist');
    fireEvent.scroll(flatList, { nativeEvent: { contentOffset: { y: 1000 } } });

    expect(mockFetchNextPage).toHaveBeenCalled();
  });
});
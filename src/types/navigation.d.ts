// src/types/navigation.d.ts
export type RootStackParamList = {
    FruitsList: undefined;
    FruitDetails: { fruit: Fruit };  // Paramètre pour la page des détails
    Favorites: undefined;
  };
  
  export type RootTabParamList = {
    FruitsList: undefined;
    Favorites: undefined;
  };
  
export interface Fruit {
    name: string;
    family: string;
    order: string;
    genus: string;
    id: number;
    nutritions: {
      carbohydrates: number;
      protein: number;
      fat: number;
      calories: number;
      sugar: number;
    };
  }

import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import favoritesSlice from './favoritesSlice'; 

// Configuration de Redux Persist
const persistConfig = {
  key: 'root', // Clé pour le stockage
  storage: AsyncStorage, // Utilisation de AsyncStorage pour sauvegarder
};


// Persistance du reducer
const persistedReducer = persistReducer(persistConfig, favoritesSlice);

// Configuration du store avec le reducer persistant
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Pour désactiver les vérifications pour Redux Persist
    }),
});

// Persister le store
export const persistor = persistStore(store);

// TypeScript Types pour le store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

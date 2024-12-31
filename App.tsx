import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import 'react-native-gesture-handler';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import TabNavigator from './navigation/TabNavigator';
import * as SplashScreen from 'expo-splash-screen';
import { store, persistor } from './src/redux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';


const queryClient = new QueryClient();

export default function App() {

  useEffect(() => {
    async function prepare() {
      try {
        // Empêche le Splash Screen de disparaître immédiatement
        await SplashScreen.preventAutoHideAsync();
        // Simule une tâche de chargement 
        await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        // Cache le Splash Screen
        await SplashScreen.hideAsync();
      }
    }
    prepare();
  }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <QueryClientProvider client={queryClient}>
          <TabNavigator/>
        </QueryClientProvider>
      </PersistGate>
    </Provider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

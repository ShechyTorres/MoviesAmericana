import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Rutas importadas
import routes from './app/navigator/routes';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    // Navegación de vistas
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={routes.Home} options={{ headerShown: false }} />
        <Stack.Screen
          name="DetailsRecommended"
          component={routes.DetailsRecommended}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MoviesRecommended"
          component={routes.MoviesRecommended}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

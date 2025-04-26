import React from 'react';
import { Characters } from './src/screens/CharactersScreen';
import { Films } from './src/screens/films';
import { DetailsCharacters } from './src/screens/DetailsCharacters';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Characters">
        <Tab.Screen name="Personagens" component={Characters} />
        <Tab.Screen name="Filmes" component={Films} />
        <Tab.Screen name="Detalhes dos Personagens" component={DetailsCharacters} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
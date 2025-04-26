import React from 'react';
import { Characters } from './src/screens/CharactersScreen';
import { Films } from './src/screens/films';
import { DetailsCharacters } from './src/screens/Details';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Characters">
        <Tab.Screen name="Characters" component={Characters} />
        <Tab.Screen name="Films" component={Films} />
        <Tab.Screen name="DetailsCharacters" component={DetailsCharacters} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
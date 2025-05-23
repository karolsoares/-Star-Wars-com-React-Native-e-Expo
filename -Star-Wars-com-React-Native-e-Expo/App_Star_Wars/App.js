import React from 'react';
import { Characters } from './src/screens/CharactersScreen';
import { Films } from './src/screens/films';
import { Ships } from './src/screens/ShipsScreen/Ships';
import { DetailsCharacters } from './src/screens/DetailsCharacters';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Characters">
        <Tab.Screen name="Characters" component={Characters} />
        <Tab.Screen name="DetailsCharacters" component={DetailsCharacters} />
        <Tab.Screen name="Films" component={Films} />
        <Tab.Screen name="Ships" component={Ships} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
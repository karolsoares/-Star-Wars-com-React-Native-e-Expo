import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import  Films  from '../screens/films';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const onPressFilm = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Characters">
        <Tab.Screen name="Detalhes dos Personagens" component={DetailsCharacters} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export function CharacterCard(label) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPressFilm}>
      <Text style={styles.name}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  name: {
    fontSize: 20,
    paddingVertical: 10,
    color: '#0D0D0D',
    fontWeight: 'bold',
  },
  card: {
    padding: 15,
    marginVertical: 10,
    backgroundColor: '#BF0B2C',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 2,
  },
})
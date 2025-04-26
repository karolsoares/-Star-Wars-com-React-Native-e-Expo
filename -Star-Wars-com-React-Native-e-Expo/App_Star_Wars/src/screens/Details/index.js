import { StatusBar } from 'expo-status-bar';
import { View, Text, FlatList, ActivityIndicator, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { useGetCharacter } from '../../services/hooks/useGetCharacter';
import { useNavigation } from '@react-navigation/native'; // Importe o hook de navegação

export const DetailsCharacters = () => {
  const { characters, loading, error } = useGetCharacter();
  const navigation = useNavigation(); // Inicialize a navegação

  const navigateToVehicles = (vehicles) => {
    navigation.navigate('Vehicles', { vehicleURLs: vehicles });
  };

  const navigateToFilms = (films) => {
    navigation.navigate('Films', { filmURLs: films });
  };

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#000" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.center}>
        <Text>Erro ao carregar personagens</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detalhes dos Personagens de Star Wars</Text>
      <FlatList
        data={characters}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.characterCard}>
            <Text style={styles.name}>Nome: {item.name}</Text>
            <Text>Altura: {item.height}</Text>
            <Text>Peso: {item.mass}</Text>
            <Text>Cabelo: {item.hair_color}</Text>
            <Text>Pele: {item.skin_color}</Text>
            <Text>Olhos: {item.eye_color}</Text>
            <Text>Gênero: {item.gender}</Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => navigateToVehicles(item.vehicles)}
              >
                <Text style={styles.buttonText}>Naves</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button}
                onPress={() => navigateToFilms(item.films)}
              >
                <Text style={styles.buttonText}>Filmes</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 15,
    backgroundColor: '#f0f0f0',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  characterCard: {
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
    borderColor: '#ddd',
    borderWidth: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#007bff',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 15,
  },
  button: {
    backgroundColor: '#28a745',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native'; // Importe o hook de navegação

export const DetailsCharacters = ({route}) => {
  const navigation = useNavigation();
  const { characterInfo } = route.params;

  const navigateToVehicles = (vehicles) => {
    navigation.navigate('Vehicles', { vehicleURLs: vehicles });
  };

  const navigateToFilms = (films) => {
    navigation.navigate('Films', { filmURLs: films });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detalhes do Personagem</Text>

      <View style={styles.characterCard}>
        <View style={styles.cardGlow} />
        <Text style={styles.name}>{characterInfo.name}</Text>

        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Altura:</Text>
          <Text style={styles.detailValue}>{characterInfo.height} cm</Text>
        </View>

        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Peso:</Text>
          <Text style={styles.detailValue}>{characterInfo.mass} kg</Text>
        </View>

        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Cor do Cabelo:</Text>
          <Text style={styles.detailValue}>{characterInfo.hair_color}</Text>
        </View>

        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Cor da Pele:</Text>
          <Text style={styles.detailValue}>{characterInfo.skin_color}</Text>
        </View>

        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Cor dos Olhos:</Text>
          <Text style={styles.detailValue}>{characterInfo.eye_color}</Text>
        </View>

        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Gênero:</Text>
          <Text style={styles.detailValue}>{characterInfo.gender}</Text>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigateToVehicles(characterInfo.vehicles)}
          >
            <Text style={styles.buttonText}>Naves</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigateToFilms(characterInfo.films)}
          >
            <Text style={styles.buttonText}>Filmes</Text>
          </TouchableOpacity>
        </View>
      </View>
      <StatusBar style="light" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    paddingTop: 40,
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 32,
    fontWeight: '900',
    color: '#FFE81F',
    textAlign: 'center',
    marginBottom: 30,
    letterSpacing: 2,
    textShadowColor: 'rgba(255, 232, 31, 0.7)',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10,
    fontFamily: 'sans-serif-condensed',
    marginTop: 20,
    transform: [{ perspective: 500 }, { rotateX: '3deg' }],
  },
  characterCard: {
    backgroundColor: '#121212',
    borderRadius: 16,
    padding: 24,
    marginVertical: 16,
    borderWidth: 1,
    borderColor: 'rgba(255, 232, 31, 0.2)',
    shadowColor: '#FFE81F',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 15,
    position: 'relative',
    overflow: 'hidden',
  },
  cardGlow: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 4,
    backgroundColor: 'rgba(255, 232, 31, 0.1)',
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 232, 31, 0.05)',
  },
  detailLabel: {
    color: '#FFE81F',
    fontWeight: '600',
    fontSize: 16,
    letterSpacing: 0.5,
    width: '40%',
  },
  detailValue: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '400',
    width: '55%',
    textAlign: 'right',
    textTransform: 'capitalize',
  },
  name: {
    color: '#FFE81F',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    letterSpacing: 1,
    textShadowColor: 'rgba(255, 232, 31, 0.5)',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 8,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 30,
  },
  button: {
    backgroundColor: 'rgba(255, 232, 31, 0.1)',
    borderWidth: 1,
    borderColor: '#FFE81F',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
    minWidth: 120,
    alignItems: 'center',
    shadowColor: '#FFE81F',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonText: {
    color: '#FFE81F',
    fontWeight: 'bold',
    letterSpacing: 1,
    fontSize: 16,
  },
});
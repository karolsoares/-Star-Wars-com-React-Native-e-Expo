import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export function CharacterCard({ characterInfo }) {
  const navigation = useNavigation();

  const irParaDetalhes = () => {
    navigation.navigate('DetailsCharacters', { characterInfo });
  };

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={irParaDetalhes}
      activeOpacity={0.7}
    >
      <Text style={styles.name}>{characterInfo.name}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '35%',              // Botão com 35% de largura
    backgroundColor: '#1A1A1A',
    paddingVertical: 20,
    paddingHorizontal: 16,
    marginBottom: 20,
    borderRadius: 16,
    shadowColor: '#FFE81F',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5,
    alignItems: 'center',       // Centraliza o conteúdo dentro do botão
    alignSelf: 'center',         // Centraliza o próprio botão no pai
    justifyContent: 'center',
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FFE81F',
    textAlign: 'center',
    letterSpacing: 1,
    textShadowColor: '#FFE81F',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 6,
  },
});
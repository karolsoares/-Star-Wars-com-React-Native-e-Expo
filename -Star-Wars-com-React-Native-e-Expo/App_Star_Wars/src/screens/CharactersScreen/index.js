import { StatusBar } from 'expo-status-bar';
import { View, Text, FlatList, ActivityIndicator, StyleSheet } from 'react-native';
import React from 'react';
import { useGetCharacter } from '../../services/hooks/useGetCharacter' ; // Caminho ajustado corretamente
import { CharacterCard}  from '../../components/CharacterCard' 

export const Characters = () => {
  const { characters, loading, error } = useGetCharacter();

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
        <Text>Erro ao carregar Characteragens</Text>
      </View>
      
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Personagens de Star Wars</Text>
      <FlatList
        data={characters}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Text style={styles.item}>{item.name}</Text>
        )}
      />
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignContent: 'center',
    flex: 1,
    paddingTop: 70,
    paddingHorizontal: 20,
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
  },
  item: {
    fontSize: 20,
    paddingVertical: 10,
    color: '#0D0D0D'
  },
});

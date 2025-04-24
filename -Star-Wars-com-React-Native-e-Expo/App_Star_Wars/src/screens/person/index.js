import { StatusBar } from 'expo-status-bar';
import { View, Text, FlatList, ActivityIndicator, StyleSheet } from 'react-native';
import React from 'react';
import { useGetPerson } from '../../services/hooks/useGetPerson' ; // Caminho ajustado corretamente

export const Person = () => {
  const { characters, loading, error } = useGetPerson();

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
        <Text>Erro ao carregar Personagens</Text>
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
    flex: 1,
    paddingTop: 70,
    paddingHorizontal: 20,
    backgroundColor: '#8C0B23',
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

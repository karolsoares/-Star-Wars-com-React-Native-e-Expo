import { StatusBar } from 'expo-status-bar';
import { View, Text, FlatList, ActivityIndicator, StyleSheet } from 'react-native';
import React from 'react';
import { useGetShips } from '../../services/hooks/useGetShips'; // Caminho ajustado corretamente
import { ShipCard } from '../../components/ShipCard';

export const Ships = ({route}) => {
  
  if (!route?.params?.characterId) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Erro ao carregar naves</Text>
      </View>
    );
  }

  const { characterId } = route.params;
  const { starships, loading, error } = useGetShips(characterId);

  console.log(starships)

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
        <Text>Erro ao carregar naves</Text>
      </View>
      
    );
  }
  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Naves utilizadas</Text>
      <FlatList
        data={starships}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ShipCard shipInfo={item} />
        )}
        columnWrapperStyle={styles.row} // Estilo para o wrapper das colunas
      />
      <StatusBar style="auto" />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    paddingTop:  40,
    paddingHorizontal: 24,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent', // Torna transparente para efeitos de overlay
  },
  title: {
    fontSize: 36,
    fontWeight: '900', // Mais negrito para impacto
    color: '#FFE81F',
    textAlign: 'center',
    marginBottom: 40,
    letterSpacing: 3,
    textShadowColor: 'rgba(255, 232, 31, 0.7)',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 12,
    fontFamily: 'sans-serif-condensed',
    transform: [{ perspective: 500 }, { rotateX: '5deg' }], // Efeito 3D sutil
  },
  errorText: {
    color: '#FF4D4D',
    fontSize: 18,
    textAlign: 'center',
    marginHorizontal: 24,
    lineHeight: 26,
    fontStyle: 'italic',
    letterSpacing: 0.5,
  },
  listContent: {
    paddingBottom: 30,
  },
  card: {
    backgroundColor: '#121212', // Mais escuro para melhor contraste
    borderRadius: 20,
    padding: 24,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: 'rgba(255, 232, 31, 0.1)', // Borda sutil amarela
    shadowColor: '#FFE81F',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 10,
    overflow: 'hidden', // Para efeitos internos
    position: 'relative', // Para pseudo-elementos
  },
  // Efeito de brilho no card (pode ser implementado com um View absoluta)
  cardGlow: {
    position: 'absolute',
    top: -10,
    left: -10,
    right: -10,
    height: 20,
    backgroundColor: 'rgba(255, 232, 31, 0.05)',
    transform: [{ rotate: '-5deg' }],
  },
  // Adicionados novos estilos para tipografia
  text: {
    color: '#FFFFFF',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.5,
  },
  // Estilo para botões no tema
  button: {
    backgroundColor: 'rgba(255, 232, 31, 0.15)',
    borderWidth: 1,
    borderColor: '#FFE81F',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginTop: 16,
  },
  buttonText: {
    color: '#FFE81F',
    fontWeight: 'bold',
    letterSpacing: 1,
  },
});
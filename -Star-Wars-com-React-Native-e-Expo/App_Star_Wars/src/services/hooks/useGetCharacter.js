import { useEffect, useState } from 'react';
import { api } from '../api';

export const useGetCharacter = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        const response = await api.get('api/characters');
        setCharacters(response.data.slice(0,5)); // Ajustado para acessar corretamente os dados da SWAPI
      } catch (err) {
        console.error('Erro ao buscar Characteragens:', err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCharacter();
  }, []);

  return {
    characters,
    loading,
    error,
  };
};

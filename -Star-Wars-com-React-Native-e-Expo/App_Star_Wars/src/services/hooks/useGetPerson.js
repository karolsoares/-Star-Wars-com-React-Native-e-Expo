import { useEffect, useState } from 'react';
import { api } from '../api';

export const useGetPerson = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPerson = async () => {
      try {
        const response = await api.get('api/characters');
        setCharacters(response.data); // Ajustado para acessar corretamente os dados da SWAPI
      } catch (err) {
        console.error('Erro ao buscar personagens:', err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPerson();
  }, []);

  return {
    characters,
    loading,
    error,
  };
};

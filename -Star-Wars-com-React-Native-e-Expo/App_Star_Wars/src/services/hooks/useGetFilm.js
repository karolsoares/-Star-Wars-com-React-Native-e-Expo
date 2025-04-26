import { useEffect, useState } from 'react';
import { api } from '../api';

export const useGetFilm = () => {
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFilms = async () => {
      try {
        const response = await api.get('/api/films');
        setFilms(response.data.slice(0,5)); // Ajustado para acessar corretamente os dados da SWAPI
      } catch (err) {
        console.error('Erro ao buscar filmes:', err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchFilms();
  }, []);

  return {
    films,
    loading,
    error,
  };
};

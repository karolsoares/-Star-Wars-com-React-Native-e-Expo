import { useState, useEffect } from 'react';
import axios from 'axios';

export function useGetFilm(characterId) {
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchFilms() {
      setLoading(true);
      try {
        const response = await axios.get(`https://swapi.online/api/characters/${characterId}/films`);
        setFilms(response.data);
      } catch (err) {
        setError(err.message || 'Erro ao buscar filmes');
      } finally {
        setLoading(false);
      }
    }

    fetchFilms();
  }, [characterId]);

  return { films, loading, error };
}

export default useGetFilm;
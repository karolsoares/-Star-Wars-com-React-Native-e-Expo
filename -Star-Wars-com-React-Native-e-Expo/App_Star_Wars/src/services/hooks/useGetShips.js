import { useState, useEffect } from 'react';
import axios from 'axios';

export function useGetShips(characterId) {
  const [starships, setStarships] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!characterId) return; // evita chamadas sem characterId

    async function fetchStarships() {
      setLoading(true);
      try {
        const response = await axios.get(`https://swapi.online/api/films/${characterId}/starships`);
        setStarships(response.data);
      } catch (err) {
        setError(err.message || 'Erro ao buscar starships');
      } finally {
        setLoading(false);
      }
    }

    fetchStarships();
  }, [characterId]);

  return { starships, loading, error };
}

export default useGetShips;
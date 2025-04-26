import { useEffect, useState } from 'react';
import { api } from '../api';

export const useGetCharacter = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        const characterIds = [1,2, 4, 5, 20]; // IDs dos personagens desejados

        const requests = characterIds.map((id) =>
          api.get(`/api/characters/${id}`)
        );

        const responses = await Promise.all(requests);
        const characterData = responses.map(res => res.data);

        setCharacters(characterData);
      } catch (err) {
        console.error('Erro ao buscar personagens:', err);
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

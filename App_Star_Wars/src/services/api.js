import axios from 'axios';

const api = axios.create({
  baseURL: 'https://swapi.dev/api/', // base da API pública de Star Wars
  timeout: 5000, // tempo limite de 5 segundos
});

export default api;

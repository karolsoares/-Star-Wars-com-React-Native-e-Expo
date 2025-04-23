import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://swapi.online/',
  timeout: 5000, // 5 segundos
});

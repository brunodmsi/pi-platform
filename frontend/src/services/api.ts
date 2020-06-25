import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8085/v1'
});

export default api;

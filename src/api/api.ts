// services/api.ts
import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_BASE_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'api-key': API_KEY,
        'Accept': 'application / json',
        'Content-Type': 'application / json'
  },
});

export default api;

// services/api.ts
import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY;

const api = axios.create({
    headers: {
        'api-key': API_KEY,
        'Content-Type': 'application/json'
  },
});

export default api;

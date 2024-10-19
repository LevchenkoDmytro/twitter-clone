import axios from 'axios';

export const instance = axios.create({
  baseURL: 'http://localhost:5000/api',
  headers: {
    Accept: 'application/json',
    'Content-type': 'application/json',
  },
  withCredentials: true,
});
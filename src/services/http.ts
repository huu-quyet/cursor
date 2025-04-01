import axios from 'axios';
import { authService } from './auth';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

const http = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

http.interceptors.request.use(
  (config) => {
    const auth = localStorage.getItem('auth');
    if (auth) {
      const { token } = JSON.parse(auth);
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

http.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const response = await authService.refreshToken();
        const { token } = response;

        const auth = localStorage.getItem('auth');
        if (auth) {
          const authData = JSON.parse(auth);
          localStorage.setItem('auth', JSON.stringify({
            ...authData,
            token,
          }));
        }

        originalRequest.headers.Authorization = `Bearer ${token}`;
        return http(originalRequest);
      } catch (refreshError) {
        localStorage.removeItem('auth');
        window.location.href = '/login';
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

export default http;
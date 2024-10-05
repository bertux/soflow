import axios from 'axios';
import { API_URL } from '../utils/utils';

export const login = async (email: string, password: string) => {
  try {
    const response = await axios.post(`${API_URL}/auth/login`, {
      email,
      password,
    });

    if (response.data.token) {
      localStorage.setItem('token', response.data.token);
    }
    
    return response.data;
  } catch (error: any) {
    if (error.response && error.response.status === 401) {
      throw new Error('Invalid credentials');
    } else {
      throw new Error('Login failed');
    }
  }
};

export const logout = () => {
  localStorage.removeItem('token');
  axios.defaults.headers.common['Authorization'] = null;
};

export const getToken = () => {
  return localStorage.getItem('token');
};

export const isAuthenticated = () => {
  return !!getToken();
};

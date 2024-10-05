import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { IUser } from '../models/user';
import { login } from '../services/authService';
import { API_URL } from '../utils/utils';

interface IUserContext {
  currentUser: IUser | null;
  loading: boolean;
  error: string | null;
  setCurrentUser: any;
}

const UserContext = createContext<IUserContext | undefined>(undefined);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<IUser | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        if (!axios.defaults.headers.common['Authorization'])
          axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
        const response = await axios.get(`${API_URL}/user/current`);
        setCurrentUser(response.data);
      } catch (err) {
        setError('Unable to fetch current user');
      } finally {
        setLoading(false);
      }
    };

    fetchCurrentUser();
  }, []);

  return (
    <UserContext.Provider value={{ currentUser, loading, error, setCurrentUser }}>
      {children}
    </UserContext.Provider>
  );
};

// Hook pour utiliser le contexte
export const useUserContext = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUserContext must be used within a UserProvider');
  }
  return context;
};

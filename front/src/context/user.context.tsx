import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { IUser } from '../models/user';
import { login } from '../services/authService';

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
        const response = await axios.get('/api/user');
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

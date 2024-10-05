import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

// Interface pour l'utilisateur
interface IUser {
  _id: string;
  email: string;
  name: string;
  avatar: string;
  role: number;
}

// Interface pour le contexte
interface IUserContext {
  currentUser: IUser | null;
  loading: boolean;
  error: string | null;
}

// Créer le contexte
const UserContext = createContext<IUserContext | undefined>(undefined);

// Provider du contexte
export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<IUser | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        const response = await axios.get('/api/current-user'); // Remplacez par l'URL de votre API
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
    <UserContext.Provider value={{ currentUser, loading, error }}>
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

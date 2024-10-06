import { useState } from 'react';
import Container from '../components/container';
import { useUserContext } from '../context/user.context';
import { login } from '../services/authService';
import axios from 'axios';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { setCurrentUser } = useUserContext();

  const handleLogin = async (e: any) => {
    e.preventDefault();
    setError('');

    try {
      const user = await login(email, password);
      localStorage.setItem('token', user.token);
      setCurrentUser(user);
      axios.defaults.headers.common['Authorization'] = `Bearer ${user.token}`;
      window.location.href = "https://soflow.vercel.app/dashboard"
    } catch (error) {
      setError('Invalid credentials');
    }
  };

  return (
    <Container className="min-h-screen flex items-center justify-center">
      <div className="bg-[#1E1F21] p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-8 text-center">Login</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-m font-medium text-white">Email</label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="text-black mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-m font-medium text-white">Mot de passe</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="text-black mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
            />
          </div>
          <button type="submit" className="w-full bg-[#BCCAE1] text-black py-2 px-4 rounded-full hover:bg-[#CCDAF1] focus:outline-none focus:bg-[#CCDAF1]">
            Se connecter
          </button>
        </form>
      </div>
    </Container>
  );
}

export default LoginPage;

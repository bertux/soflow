import { useState } from 'react';
import { login } from '../services/authService';
import Container from '../components/container';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e: any) => {
    e.preventDefault();
    setError('');

    try {
      const { token } = await login(username, password);
      localStorage.setItem('token', token);
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
            <label htmlFor="username" className="block text-m font-medium text-white">Email</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
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

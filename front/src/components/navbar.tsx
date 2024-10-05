import { Link } from 'react-router-dom';
import { logout } from '../services/authService';
import { useState } from 'react';
import { useUserContext } from '../context/user.context';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { currentUser, loading, error } = useUserContext();

  const handleLogout = () => {
    logout();
    window.location.href = '/login';
  };

  const renderApporteurMenu = () => (
      <div className="hidden md:flex space-x-4 ml-6 menu">
        <Link to="/dashboard" className="hover:text-gray-400">Commissions</Link>
        <Link to="/clients" className="hover:text-gray-400">Clients</Link>
        <Link to="/products" className="hover:text-gray-400">Produits</Link>
    </div>
  )

  const renderFournisseurMenu = () => (
    <div className="hidden md:flex space-x-4 ml-6 menu">
        <Link to="/products" className="hover:text-gray-400">Produits</Link>
        <Link to="/clients" className="hover:text-gray-400">Apporteur d'affaires</Link>
        <Link to="/dashboard" className="hover:text-gray-400">Commissions</Link>
    </div>
  )

  const renderNotLoggedMenu: any = () => (
    <div className="hidden md:flex space-x-4 ml-6 menu">
        <Link to="/login" className="hover:text-gray-400">Se connecter</Link>
    </div>
  )

  return (
    <nav className="navbar flex justify-between items-center bg-[#141414] text-white sticky">
      <div className="flex items-center">
        <Link to="/" className="hover:text-gray-400 logo">
            <img src="/logo.svg" alt="Logo" className="h-8 mr-2" />
        </Link>

        { !currentUser && renderNotLoggedMenu() }
        { !loading && currentUser?.role === 1 && renderApporteurMenu() }
        { !loading && currentUser?.role === 2 && renderFournisseurMenu() }
      </div>

      { 
        currentUser && <div className="flex items-center"  onClick={() => setIsOpen(!isOpen)}>
          <img
            src={`/avatar/${currentUser.avatar}`}
            alt="Avatar"
            className="h-10 w-10 rounded-full"
          />
        </div>
      }

      {isOpen && (
            <div className="absolute top-14 right-6 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
              <ul className="py-1">
                <li>
                  <a
                    href="/profile"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                  >
                    Mon profil
                  </a>
                </li>
                <li>
                  <a
                    href="/settings"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                  >
                    Paramètres
                  </a>
                </li>
                <li>
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-200"
                  >
                    Se déconnecter
                  </button>
                </li>
              </ul>
            </div>
          )}
    </nav>
  );
};

export default Navbar;

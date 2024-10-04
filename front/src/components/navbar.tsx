import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar flex justify-between items-center bg-[#141414] text-white sticky">
      <div className="flex items-center">
        <Link to="/" className="hover:text-gray-400 logo">
            <img src="/logo.png" alt="Logo" className="h-8 mr-2" />
        </Link>

        <div className="hidden md:flex space-x-4 ml-6 menu">
            <Link to="/stats" className="hover:text-gray-400">Commissions</Link>
            <Link to="/clients" className="hover:text-gray-400">Clients</Link>
            <Link to="/products" className="hover:text-gray-400">Produits</Link>
        </div>
      </div>

      <div className="flex items-center">
        <img
          src="/avatar.png"
          alt="Avatar"
          className="h-10 w-10 rounded-full"
        />
      </div>
    </nav>
  );
};

export default Navbar;

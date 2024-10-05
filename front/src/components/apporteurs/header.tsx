import React from 'react';
import { useUserContext } from '../../context/user.context';

const Header: React.FC = () => {
    const { currentUser } = useUserContext();

    return (
      <div>
        <h1 className="text-6xl pb-2">Hello {currentUser?.name} !</h1>
        <p className="text-gray-400 text-xl">Suivez vos commissions facilement et en temps réel.</p>
      </div>
    );
  };
  
  export default Header;
  
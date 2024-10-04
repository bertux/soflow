import React from 'react';
import './App.css';
import Header from './components/header';
import Statistics from './components/statistics';
import CommissionsList from './components/commissionsList';
import { RouteList } from './routeList';
import Navbar from './components/navbar';

function App() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">      
      <RouteList />
    </div>      
  );
}

export default App;

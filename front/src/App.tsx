import React from 'react';
import './App.css';
import Header from './components/header';
import Statistics from './components/statistics';
import CommissionsList from './components/commissionsList';

function App() {
  return (
    <div className="bg-gray-900 text-white min-h-screen p-6">
      <Header />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        <Statistics />
        <CommissionsList />
      </div>
    </div>      
  );
}

export default App;

import React from 'react';
import CommissionsList from './commissionsList';
import Header from './header';
import Statistics from './statistics';

const Dashboard: React.FC = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen p-6">
      <Header />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        <Statistics />
        <CommissionsList />
      </div>
    </div>
  );
};

export default Dashboard;
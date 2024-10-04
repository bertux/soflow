import React from 'react';
import CommissionsList from './commissionsList';
import Header from './header';
import Statistics from './statistics';
import Container from '../container';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Header />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        <Header />
        <Statistics />
        <CommissionsList />
      </div>
    </Container>
  );
};

export default Dashboard;
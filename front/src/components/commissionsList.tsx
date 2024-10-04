import React from 'react';

const commissions = [
    { client: 'Seb', product: 'Actifry Simple One', date: '30/09/2024', amount: '25 €' },
    { client: 'Xerox', product: 'Imprimante Xerox 120', date: '30/09/2024', amount: '120 €' },
    // Add the rest here
  ];
  
  const CommissionsList: React.FC = () => {
    return (
      <div className="bg-gray-800 p-6 rounded-lg col-span-2">
        <h3 className="text-xl font-bold mb-4">Commissions</h3>
        <ul>
          {commissions.map((commission, index) => (
            <li key={index} className="flex justify-between border-b border-gray-700 py-2">
              <span>{commission.client}</span>
              <span>{commission.product}</span>
              <span>{commission.date}</span>
              <span className="font-bold">{commission.amount}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default CommissionsList;
  
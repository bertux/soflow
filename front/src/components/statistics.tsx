import React from 'react';

const Statistics: React.FC = () => {
    return (
      <div className="col-span-1 grid grid-cols-2 gap-4">
        <div className="bg-blue-500 p-4 rounded-lg">
          <h2 className="text-2xl font-bold">10 000 €</h2>
          <p className="text-gray-200">Commissions du mois</p>
        </div>
        <div className="bg-blue-500 p-4 rounded-lg">
          <h2 className="text-2xl font-bold">649 €</h2>
          <p className="text-gray-200">Commissions en attente</p>
        </div>
        <div className="bg-pink-500 p-4 rounded-lg">
          <h2 className="text-2xl font-bold">53</h2>
          <p className="text-gray-200">Produits actifs</p>
        </div>
        <div className="bg-blue-500 p-4 rounded-lg">
          <h2 className="text-2xl font-bold">+25%</h2>
          <p className="text-gray-200">Évolution des commissions</p>
        </div>
      </div>
    );
  };
  
  export default Statistics;
  
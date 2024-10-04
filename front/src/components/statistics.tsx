import React from 'react';

const Statistics: React.FC = () => {
    return (
      <div className="col-span-1 grid grid-cols-2 gap-4">
        <div className="bg-[#BCCAE1] p-4 rounded-lg text-black col-span-2">
          <p className="text-black text-3xl pb-2">Commissions du mois</p>
          <h2 className="text-2xl font-bold">10 000 €</h2>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg col-span-2">
          <p className="text-gray-200 text-3xl pb-2">Commissions en attente</p>
          <h2 className="text-2xl font-bold">649 €</h2>
        </div>
        <div className="bg-[#DCBBDD] p-4 rounded-lg text-black">
          <p className="text-black-200 text-2xl pb-2">Produits actifs</p>
          <h2 className="text-2xl font-bold">53</h2>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg">
          <p className="text-gray-200 text-2xl pb-2">Évolution des commissions</p>
          <h2 className="text-2xl font-bold">+25%</h2>
        </div>
      </div>
    );
  };
  
  export default Statistics;
  
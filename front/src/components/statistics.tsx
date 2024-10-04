import React from 'react';

const Statistics: React.FC = () => {
    return (
      <div className="col-span-1 grid grid-cols-2 gap-4 stats">
        <div className="bg-[#BCCAE1] p-6 rounded-2xl text-black col-span-2">
          <p className="text-black text-lg pb-2">Commissions du mois</p>
          <h2 className="text-5xl font-semibold">10 000 €</h2>
        </div>
        <div className="bg-[#1E1F21] p-6 rounded-2xl col-span-2">
          <p className="text-gray-200 text-lg pb-2">Commissions en attente</p>
          <h2 className="text-5xl font-semibold">649 €</h2>
        </div>
        <div className="bg-[#DCBBDD] p-6 rounded-2xl text-black">
          <p className="text-black-200 text-lg pb-2">Produits actifs</p>
          <h2 className="text-4xl font-semibold">53</h2>
        </div>
        <div className="bg-[#1E1F21] p-6 rounded-2xl">
          <p className="text-gray-200 text-lg pb-2">Évolution des commissions</p>
          <h2 className="text-4xl font-semibold">+25%</h2>
        </div>
      </div>
    );
  };
  
  export default Statistics;
  
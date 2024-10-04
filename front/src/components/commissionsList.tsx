import React from 'react';

const commissions = [
    { client: 'Seb', product: 'Actifry Simple One', date: '30/09/2024', amount: '25 €', isPaid: true },
    { client: 'Xerox', product: 'Imprimante Xerox 120', date: '30/09/2024', amount: '120 €', isPaid: false },
  ];

  interface IconProps {
    isPaid: boolean; // Définir le type de 'isPaid' comme boolean
  }

  const PaidIcon: React.FC<IconProps> = ({ isPaid }) => (
    <img 
      src={`/${isPaid ? "paid" : "notPaid"}.png`} 
      alt={isPaid ? "Paid" : "Not Paid"} 
      className="ml-1" 
      width="24px"
    />
  );
  
  const CommissionsList: React.FC = () => {
    return (
      <div className="bg-gray-800 p-6 rounded-lg col-span-2">
        <h3 className="text-xl font-bold mb-4">Commissions</h3>
        <div className="grid grid-cols-4 gap-4 pb-2 mb-2 rounded-md bg-[#2A2F37] uppercase p-2 text-[#7D8490]">
          <span className="font-bold">Client</span>
          <span className="font-bold">Produit</span>
          <span className="font-bold">Date</span>
          <span className="font-bold">Montant</span>
        </div>
        <ul className="p-2">
          {commissions.map((commission, index) => (
            <li key={index} className="grid grid-cols-4 py-2">
              <span>{commission.client}</span>
              <span>{commission.product}</span>
              <span>{commission.date}</span>
              <span className="font-bold flex rounded-full bg-gray-900 px-2 py-1 w-max">{commission.amount} <PaidIcon isPaid={commission.isPaid} /> </span>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default CommissionsList;
  
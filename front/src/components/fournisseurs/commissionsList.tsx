import React from 'react';

const commissions = [
  { product: 'Actifry Simple One', date: '30/09/2024', montant: '25 €', commission: '2 €', isPaid: true },
  { product: 'Imprimante Xerox 120', date: '30/09/2024', montant: '120 €', commission: '10 €', isPaid: false },
  { product: 'Télévision 55"', date: '29/09/2024', montant: '750 €', commission: '50 €', isPaid: true },
  { product: 'iPhone 14', date: '28/09/2024', montant: '999 €', commission: '75 €', isPaid: false },
  { product: 'Casque Audio WH-1000XM4', date: '27/09/2024', montant: '350 €', commission: '25 €', isPaid: true },
  { product: 'Enceinte portable', date: '26/09/2024', montant: '200 €', commission: '15 €', isPaid: false },
  { product: 'Ordinateur Portable Inspiron', date: '25/09/2024', montant: '800 €', commission: '60 €', isPaid: true },
  { product: 'Souris sans fil', date: '24/09/2024', montant: '50 €', commission: '5 €', isPaid: true },
  { product: 'Surface Pro', date: '23/09/2024', montant: '1200 €', commission: '90 €', isPaid: false },
  { product: 'Réfrigérateur Smart', date: '22/09/2024', montant: '1500 €', commission: '120 €', isPaid: true },
  { product: 'Appareil Photo DSLR', date: '21/09/2024', montant: '600 €', commission: '45 €', isPaid: false },
  { product: 'Caméra HERO9', date: '20/09/2024', montant: '450 €', commission: '35 €', isPaid: true }
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
      <div className="bg-[#1E1F21] p-6 rounded-lg col-span-2 overflow-y-auto">
        <h3 className="text-xl font-bold mb-4">Commissions</h3>
        <div className="grid grid-cols-4 gap-4 pb-2 mb-2 rounded-md bg-[#2A2F37] uppercase p-2 text-[#7D8490]">
          <span className="font-bold">Produit</span>
          <span className="font-bold">Date</span>
          <span className="font-bold">Montant</span>
          <span className="font-bold">Commission due</span>
        </div>
        <ul className="p-2">
          {commissions.map((commission, index) => (
            <li key={index} className="grid grid-cols-4 py-2">
              <span>{commission.product}</span>
              <span>{commission.date}</span>
              <span>{commission.montant}</span>
              <span className="font-bold flex rounded-full bg-gray-900 px-2 py-1 w-max">{commission.commission} <PaidIcon isPaid={commission.isPaid} /> </span>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default CommissionsList;
  
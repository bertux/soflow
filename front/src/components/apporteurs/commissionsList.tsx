import React from 'react';

const commissions = [
  { client: 'Seb', product: 'Actifry Simple One', date: '30/09/2024', commission: '25 €', isPaid: true },
  { client: 'Xerox', product: 'Imprimante Xerox 120', date: '30/09/2024', commission: '120 €', isPaid: false },
  { client: 'Samsung', product: 'Télévision 55"', date: '29/09/2024', commission: '750 €', isPaid: true },
  { client: 'Apple', product: 'iPhone 14', date: '28/09/2024', commission: '999 €', isPaid: false },
  { client: 'Sony', product: 'Casque Audio WH-1000XM4', date: '27/09/2024', commission: '350 €', isPaid: true },
  { client: 'Bose', product: 'Enceinte portable', date: '26/09/2024', commission: '200 €', isPaid: false },
  { client: 'Dell', product: 'Ordinateur Portable Inspiron', date: '25/09/2024', commission: '800 €', isPaid: true },
  { client: 'HP', product: 'Souris sans fil', date: '24/09/2024', commission: '50 €', isPaid: true },
  { client: 'Microsoft', product: 'Surface Pro', date: '23/09/2024', commission: '1200 €', isPaid: false },
  { client: 'LG', product: 'Réfrigérateur Smart', date: '22/09/2024', commission: '1500 €', isPaid: true },
  { client: 'Nikon', product: 'Appareil Photo DSLR', date: '21/09/2024', commission: '600 €', isPaid: false },
  { client: 'GoPro', product: 'Caméra HERO9', date: '20/09/2024', commission: '450 €', isPaid: true },
  { client: 'Lenovo', product: 'Tablette Yoga', date: '19/09/2024', commission: '300 €', isPaid: false },
  { client: 'Asus', product: 'Ordinateur Portable ROG', date: '18/09/2024', commission: '1200 €', isPaid: true },
  { client: 'Amazon', product: 'Echo Dot', date: '17/09/2024', commission: '50 €', isPaid: false },
  { client: 'Fitbit', product: 'Montre connectée', date: '16/09/2024', commission: '150 €', isPaid: true },
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
              <span className="font-bold flex rounded-full bg-gray-900 px-2 py-1 w-max">{commission.commission} <PaidIcon isPaid={commission.isPaid} /> </span>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default CommissionsList;
  
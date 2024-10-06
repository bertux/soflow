import React, { useEffect, useState } from 'react';
import { ethers } from "ethers";
import { useUserContext } from '../../context/user.context';

const Statistics: React.FC = () => {
  const { currentUser } = useUserContext();
  const [balance, setBalance] = useState(null);

  const getBalance = async () => {
    const fournisseurAddress = "0xb6fA663CE9a7F4A686294C900e3bf60C75632597";
    const provider = new ethers.providers.JsonRpcProvider();

    const fournisseurAbi = [
      // Some details about the token
      "function name() view returns (string)",
      "function symbol() view returns (string)",

      // Get the account balance
      "function balanceOf(address) view returns (uint)",

      // Send some of your tokens to someone else
      "function transfer(address to, uint amount)",

      // An event triggered whenever anyone transfers to someone else
      "event Transfer(address indexed from, address indexed to, uint amount)"
    ];
    const fournisseurContract = new ethers.Contract(fournisseurAddress, fournisseurAbi, provider);
    const balance = await fournisseurContract.balanceOf(currentUser?.wallet)
    setBalance(ethers.utils.formatUnits(balance, 18));
  }

  useEffect(() => {   
    getBalance();
  }, [currentUser]);

    return (
      <div className="col-span-1 grid grid-cols-2 gap-4 stats">
        <div className="bg-[#BCCAE1] p-6 rounded-2xl text-black col-span-2">
          <p className="text-black text-lg pb-2">Chiffre d'affaires du mois hors commission</p>
          <h2 className="text-5xl font-semibold tracking-1pc">{balance} €</h2>
        </div>
        <div className="bg-[#1E1F21] p-6 rounded-2xl col-span-2">
          <p className="text-gray-200 text-lg pb-2">Commissions en attente de paiement</p>
          <h2 className="text-5xl font-semibold tracking-1pc">649 €</h2>
        </div>
        <div className="bg-[#DCBBDD] p-6 rounded-2xl text-black">
          <p className="text-black-200 text-lg pb-2">Produits actifs</p>
          <h2 className="text-4xl font-semibold tracking-1pc">2</h2>
        </div>
        <div className="bg-[#1E1F21] p-6 rounded-2xl">
          <p className="text-gray-200 text-lg pb-2">Évolution des commissions</p>
          <h2 className="text-4xl font-semibold tracking-1pc">+15%</h2>
        </div>
      </div>
    );
  };
  
  export default Statistics;
  
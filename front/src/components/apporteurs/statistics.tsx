import React, { useEffect, useState } from 'react';
import { useUserContext } from '../../context/user.context';
import { ethers, JsonRpcProvider } from 'ethers';

const Statistics: React.FC = () => {const { currentUser } = useUserContext();
const [balance, setBalance] = useState<string | null>(null);

const getBalance = async () => {
    const affiliateAddress = "0xadA84be0339b9740F5Dce8b9605e595D475e5C97";
    const provider = new JsonRpcProvider("https://cacib-saturn-test.francecentral.cloudapp.azure.com");

    const affiliateAbi = [
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
    const affiliateContract = new ethers.Contract(affiliateAddress, affiliateAbi, provider);
    const balance = await affiliateContract.balanceOf(currentUser?.wallet)
    const formattedBalance = ethers.formatUnits(balance, 2);
    setBalance(formattedBalance);
  }

  useEffect(() => {   
    getBalance();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentUser]);

    return (
      <div className="col-span-1 grid grid-cols-2 gap-4 stats">
        <div className="bg-[#BCCAE1] p-6 rounded-2xl text-black col-span-2">
          <p className="text-black text-lg pb-2">Commissions du mois</p>
          <h2 className="text-5xl font-semibold tracking-1pc">{balance} €</h2>
        </div>
        <div className="bg-[#1E1F21] p-6 rounded-2xl col-span-2">
          <p className="text-gray-200 text-lg pb-2">Commissions en attente</p>
          <h2 className="text-5xl font-semibold tracking-1pc">649 €</h2>
        </div>
        <div className="bg-[#DCBBDD] p-6 rounded-2xl text-black">
          <p className="text-black-200 text-lg pb-2">Produits actifs</p>
          <h2 className="text-4xl font-semibold tracking-1pc">53</h2>
        </div>
        <div className="bg-[#1E1F21] p-6 rounded-2xl">
          <p className="text-gray-200 text-lg pb-2">Évolution des commissions</p>
          <h2 className="text-4xl font-semibold tracking-1pc">+25%</h2>
        </div>
      </div>
    );
  };
  
  export default Statistics;
  
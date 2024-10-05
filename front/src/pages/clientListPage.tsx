import React, { useEffect, useState } from 'react';
import { CommissionPlan } from '../models/commissionPlan';
import commissionPlanService from '../services/commissionPlanService';
import Container from '../components/container';

const ClientListPage: React.FC = () => {
  const [commissionPlans, setCommissionPlans] = useState<CommissionPlan[] | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchCommissionPlans = async () => {
    try {
      const response = await commissionPlanService.getAllCommissionPlans()
      setCommissionPlans(response);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {   
    fetchCommissionPlans();
  }, []);

  if (loading) {
    return <div className="text-center">Chargement...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  return (
    <Container>
      <h1 className="text-3xl font-bold">Clients</h1>
      <div className="bg-[#1E1F21] p-6 rounded-lg col-span-2 overflow-y-auto">
        <h3 className="text-xl font-bold mb-4">Plan de commissions</h3>
        <div className="grid grid-cols-5 gap-4 pb-2 mb-2 rounded-md bg-[#2A2F37] uppercase p-2 text-[#7D8490]">
          <span className="font-bold">Produit</span>
          <span className="font-bold">Commission</span>
          <span className="font-bold">Date début</span>
          <span className="font-bold">Date fin</span>
          <span className="font-bold">Client</span>
        </div>
        <ul className="p-2">
          {commissionPlans?.map((commission, index) => (
            <li key={index} className="grid grid-cols-5 py-2">
              <span>{commission.product?.title}</span>
              <span>{commission.commissionRate} %</span>
              <span>{commission.startAt}</span>
              <span>{commission.endAt}</span>
              <span className='flex items-center'>
                <img
                  src={`/avatar/${commission.user?.avatar}`}
                  alt="Avatar"
                  className="h-10 w-10 rounded-full mr-2"
                />
                {commission.user?.name}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  );
};

export default ClientListPage;

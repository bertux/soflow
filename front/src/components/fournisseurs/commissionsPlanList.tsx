import React from 'react';
import { CommissionPlan } from '../../models/commissionPlan';

interface CommissionPlanListProps {
  commissionPlans?: CommissionPlan[];
}

  const CommissionPlanList: React.FC<CommissionPlanListProps> = ({ commissionPlans }) => {
    return (
      <div className="bg-[#1E1F21] p-6 rounded-lg col-span-2 overflow-y-auto">
        <h3 className="text-xl font-bold mb-4">Plan de commissions</h3>
        <div className="grid grid-cols-4 gap-4 pb-2 mb-2 rounded-md bg-[#2A2F37] uppercase p-2 text-[#7D8490]">
          <span className="font-bold">Commission</span>
          <span className="font-bold">Date début</span>
          <span className="font-bold">Date fin</span>
          <span className="font-bold">Apporteur d'affaires</span>
        </div>
        <ul className="p-2">
          {commissionPlans?.map((commission, index) => (
            <li key={index} className="grid grid-cols-4 py-2">
              <span>{commission.commissionRate}</span>
              <span>{commission.startAt}</span>
              <span>{commission.endAt}</span>
              <span>{commission.affiliate}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default CommissionPlanList;
  
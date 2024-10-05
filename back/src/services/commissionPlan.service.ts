import { commissionPlanRepository } from '../repositories/commissionPlan.repository';
import { ICommissionPlan } from '../models/commissionPlan.model';

class CommissionPlanService {
  async create(data: ICommissionPlan): Promise<ICommissionPlan> {
    return await commissionPlanRepository.createCommissionPlan(data);
  }

  async getById(id: string): Promise<ICommissionPlan | null> {
    return await commissionPlanRepository.getCommissionPlanById(id);
  }

  async getAll(): Promise<ICommissionPlan[]> {
    return await commissionPlanRepository.getAllCommissionPlans();
  }

  async update(id: string, data: Partial<ICommissionPlan>): Promise<ICommissionPlan | null> {
    return await commissionPlanRepository.updateCommissionPlan(id, data);
  }

  async delete(id: string): Promise<ICommissionPlan | null> {
    return await commissionPlanRepository.deleteCommissionPlan(id);
  }
}

export const commissionPlanService = new CommissionPlanService();

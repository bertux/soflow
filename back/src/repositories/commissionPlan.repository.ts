import { CommissionPlan, ICommissionPlan } from '../models/commissionPlan.model'; // Assurez-vous d'avoir le modèle

class CommissionPlanRepository {
  // Créer un plan de commission
  async createCommissionPlan(plan: ICommissionPlan) {
    const newPlan = new CommissionPlan(plan);
    await newPlan.save();
    return newPlan;
  }

  // Obtenir un plan de commission par ID
  async getCommissionPlanById(planId: string) {
    return await CommissionPlan.findById(planId);
  }

  // Mettre à jour un plan de commission
  async updateCommissionPlan(planId: string, planData: Partial<ICommissionPlan>) {
    return await CommissionPlan.findByIdAndUpdate(planId, planData, { new: true });
  }

  // Supprimer un plan de commission
  async deleteCommissionPlan(planId: string) {
    return await CommissionPlan.findByIdAndDelete(planId);
  }

  // Obtenir tous les plans de commission
  async getAllCommissionPlans() {
    return await CommissionPlan.find();
  }
}

export const commissionPlanRepository = new CommissionPlanRepository();

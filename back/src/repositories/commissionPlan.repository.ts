import { CommissionPlanModel, ICommissionPlan } from '../models/commissionPlan.model'; // Assurez-vous d'avoir le modèle
import { ObjectId } from 'mongodb';

class CommissionPlanRepository {
  // Créer un plan de commission
  async createCommissionPlan(plan: ICommissionPlan) {
    const newPlan = new CommissionPlanModel(plan);
    await newPlan.save();
    return newPlan;
  }

  // Obtenir un plan de commission par ID
  async getCommissionPlanById(planId: string) {
    return await CommissionPlanModel.findById(planId);
  }

  // Mettre à jour un plan de commission
  async updateCommissionPlan(planId: string, planData: Partial<ICommissionPlan>) {
    return await CommissionPlanModel.findByIdAndUpdate(planId, planData, { new: true });
  }

  // Supprimer un plan de commission
  async deleteCommissionPlan(planId: string) {
    return await CommissionPlanModel.findByIdAndDelete(planId);
  }

  // Obtenir tous les plans de commission
  async getAllCommissionPlans(productId: string) {
    return await CommissionPlanModel.find({ productId: new ObjectId(productId)});
  }

  async getAllCommissionPlansCurrent(userId: string) {
    return await CommissionPlanModel.find({ userId: new ObjectId(userId)});
  }
}

export const commissionPlanRepository = new CommissionPlanRepository();

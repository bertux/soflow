import axios from 'axios';

const API_URL = '/api/commission-plans'; // Remplacez par votre URL d'API

class CommissionPlanService {
  // Créer un nouveau plan de commission
  async createCommissionPlan(data: any): Promise<any> {
    try {
      const response = await axios.post(`${API_URL}`, data);
      return response.data;
    } catch (error) {
      throw new Error(`Erreur lors de la création du plan de commission: ${error}`);
    }
  }

  // Récupérer tous les plans de commission
  async getAllCommissionPlans(productId: string): Promise<any[]> {
    try {
      const response = await axios.get(`${API_URL}/commissionPlan?productId=${productId}`);
      return response.data;
    } catch (error) {
      throw new Error(`Erreur lors de la récupération des plans de commission: ${error}`);
    }
  }

  // Récupérer un plan de commission par ID
  async getCommissionPlanById(id: string): Promise<any> {
    try {
      const response = await axios.get(`${API_URL}/commissionPlan/${id}`);
      return response.data;
    } catch (error) {
      throw new Error(`Erreur lors de la récupération du plan de commission: ${error}`);
    }
  }

  // Mettre à jour un plan de commission par ID
  async updateCommissionPlan(id: string, data: any): Promise<any> {
    try {
      const response = await axios.put(`${API_URL}/${id}`, data);
      return response.data;
    } catch (error) {
      throw new Error(`Erreur lors de la mise à jour du plan de commission: ${error}`);
    }
  }

  // Supprimer un plan de commission par ID
  async deleteCommissionPlan(id: string): Promise<void> {
    try {
      await axios.delete(`${API_URL}/${id}`);
    } catch (error) {
      throw new Error(`Erreur lors de la suppression du plan de commission: ${error}`);
    }
  }
}

export default new CommissionPlanService

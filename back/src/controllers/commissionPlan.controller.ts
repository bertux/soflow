import { Request, Response } from 'express';
import { ICommissionPlan } from '../models/commissionPlan.model';
import { commissionPlanService } from '../services/commissionPlan.service';

class CommissionPlanController {
  async create(req: Request, res: Response): Promise<void> {
    try {
      const commissionPlan: ICommissionPlan = req.body;
      const createdCommissionPlan = await commissionPlanService.create(commissionPlan);
      res.status(201).json(createdCommissionPlan);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }

  async getById(req: Request, res: Response): Promise<any> {
    try {
      const commissionPlan: ICommissionPlan | null = await commissionPlanService.getById(req.params.id);
      if (!commissionPlan) {
        return res.status(404).json({ message: 'Commission Plan not found' });
      }
      res.json(commissionPlan);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }

  async getAll(req: Request, res: Response): Promise<any> {
    try {
      const commissionPlans : ICommissionPlan[] = await commissionPlanService.getAll();
      res.json(commissionPlans);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }

  async update(req: Request, res: Response): Promise<any> {
    try {
      const commissionPlan: ICommissionPlan|null = await commissionPlanService.update(req.params.id, req.body);
      if (!commissionPlan) {
        return res.status(404).json({ message: 'Commission Plan not found' });
      }
      res.json(commissionPlan);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }

  async delete(req: Request, res: Response): Promise<any> {
    try {
      const commissionPlan: ICommissionPlan|null = await commissionPlanService.delete(req.params.id);
      if (!commissionPlan) {
        return res.status(404).json({ message: 'Commission Plan not found' });
      }
      res.status(204).send();
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }
}

export const commissionPlanController = new CommissionPlanController();

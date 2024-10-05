import { Request, Response } from 'express';
import { ICommissionPlan } from '../models/commissionPlan.model';
import { commissionPlanService } from '../services/commissionPlan.service';
import { userService } from '../services/user.service';

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
        const { productId }  = req.query;
        
        if (!req.query.productId)
            return null;
    
      const commissionPlans : ICommissionPlan[] = await commissionPlanService.getAll(productId as string);

      const result = await Promise.all(commissionPlans.map(async a => {
            const affiliate = await userService.getUserById(a.userId);
            const r = {
            _id: a._id,
            commissionRate: a.commissionRate,
            startAt: a.startAt,
            endAt: a.endAt,
            user: affiliate
        }

        return r;
      }));

      res.json(result);
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

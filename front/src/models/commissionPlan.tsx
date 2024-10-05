import { IUser } from "./user";

export interface CommissionPlan {
    commissionRate: number; 
    startAt: string; 
    endAt: string; 
    user: IUser;
    productId: string;
  }
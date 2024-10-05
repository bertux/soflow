import { CommissionPlan } from "./commissionPlan";

export interface Product {
    _id?: string; 
    title: string;
    description: string;
    avatar: string; 
    price: number;
    commissionPlan: CommissionPlan;
}
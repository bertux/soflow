import { CommissionPlan } from "./commissionPlan";

export interface Product {
    id?: string; 
    title: string;
    description: string;
    avatar: string; 
    price: number;
    commissionPlan: CommissionPlan;
}
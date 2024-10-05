import { CommissionPlan } from "./commissionPlan";

export interface Product {
    id?: string; // Optionnel pour la création
    title: string;
    description: string;
    avatar: string; // URL ou chemin vers l'image de l'avatar
    price: number;
    commissionPlan: CommissionPlan;
}
  
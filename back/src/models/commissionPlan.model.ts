import mongoose, { Document, Schema } from 'mongoose';

export interface ICommissionPlan extends Document {
    commissionRate: number; 
    startAt: string; 
    endAt: string; 
    affiliateId: string;
    productId: string;
  }
  
  const commissionPlanSchema: Schema = new Schema({
    commissionRate: { type: Number, required: true },
    startAt: { type: String, required: true },
    endAt: { type: String, required: true },
    productId: { type: String, required: true },
    affiliateId: { type: String, required: true },
  });
  
  export const CommissionPlan = mongoose.model<ICommissionPlan>('CommissionPlan', commissionPlanSchema);
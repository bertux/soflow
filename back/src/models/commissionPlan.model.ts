import mongoose, { Document, Schema } from 'mongoose';

export interface ICommissionPlan extends Document {
    commissionRate: number; 
    duration: string; 
    frequency: string; 
    affiliateId: string;
  }
  
  const commissionPlanSchema: Schema = new Schema({
    commissionRate: { type: Number, required: true },
    duration: { type: String, required: true },
    frequency: { type: String, required: true },
    affiliate: {
      _id: { type: String, required: true },
      name: { type: String, required: true }
    }
  });
  
  export const CommissionPlan = mongoose.model<ICommissionPlan>('CommissionPlan', commissionPlanSchema);
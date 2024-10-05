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
    productId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    affiliateId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  });
  
  export const CommissionPlanModel = mongoose.model<ICommissionPlan>('CommissionPlan', commissionPlanSchema);
import mongoose, { Document, Schema } from 'mongoose';

export interface ICommissionPlan extends Document {
    commissionRate: number; 
    startAt: string; 
    endAt: string; 
    userId: string;
    productId: string;
  }

  export interface ICommissionPlanDto {
    commissionRate: number; 
    startAt: string; 
    endAt: string; 
    user: object;
    productId: string;
  }
  
  const commissionPlanSchema: Schema = new Schema({
    commissionRate: { type: Number, required: true },
    startAt: { type: String, required: true },
    endAt: { type: String, required: true },
    productId: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  });
  
  export const CommissionPlanModel = mongoose.model<ICommissionPlan>('CommissionPlan', commissionPlanSchema);
import mongoose, { Document, Schema } from 'mongoose';
import { CommissionPlan } from "./commissionPlan.model";

export interface IProduct extends Document {
    _id: string; 
    title: string;
    description: string;
    avatar: string; 
    price: number;
    userId: string;
}
  
const productSchema: Schema = new Schema({
    _id: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    avatar: { type: String, required: true },
    price: { type: Number, required: true },
    userId: { type: String, required: true },
  });  

  export const Product = mongoose.model<IProduct>('Product', productSchema);
import mongoose, { Document, Schema } from 'mongoose';

export interface IProduct extends Document {
    _id: string; 
    title: string;
    description: string;
    avatar: string; 
    price: number;
    userId: string;
}
  
const productSchema: Schema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    avatar: { type: String, required: true },
    price: { type: Number, required: true },
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  });  

  export const ProductModel = mongoose.model<IProduct>('Product', productSchema);
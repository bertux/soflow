import { ProductModel, IProduct } from '../models/product.model';
import { ObjectId } from 'mongodb';

class ProductRepository {
  async createProduct(data: IProduct): Promise<IProduct> {
    const product = new ProductModel(data);
    return await product.save();
  }

  async getProductById(id: string): Promise<IProduct | null> {
    return await ProductModel.findById(new ObjectId(id));
  }

  async getAllProducts(userId: string): Promise<IProduct[]> {
    return await ProductModel.find({ userId: new ObjectId(userId) });
  }

  async updateProduct(id: string, data: Partial<IProduct>): Promise<IProduct | null> {
    return await ProductModel.findByIdAndUpdate(id, data, { new: true });
  }

  async deleteProduct(id: string): Promise<IProduct | null> {
    return await ProductModel.findByIdAndDelete(new ObjectId(id));
  }
}

export const productRepository = new ProductRepository();

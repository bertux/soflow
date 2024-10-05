import { Product, IProduct } from '../models/product.model';

class ProductRepository {
  async createProduct(data: IProduct): Promise<IProduct> {
    const product = new Product(data);
    return await product.save();
  }

  async getProductById(id: string): Promise<IProduct | null> {
    return await Product.findById(id);
  }

  async getAllProducts(): Promise<IProduct[]> {
    return await Product.find();
  }

  async updateProduct(id: string, data: Partial<IProduct>): Promise<IProduct | null> {
    return await Product.findByIdAndUpdate(id, data, { new: true });
  }

  async deleteProduct(id: string): Promise<IProduct | null> {
    return await Product.findByIdAndDelete(id);
  }
}

export const productRepository = new ProductRepository();

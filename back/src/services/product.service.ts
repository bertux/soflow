import { productRepository } from '../repositories/product.repository';
import { IProduct } from '../models/product.model';

class ProductService {
  async create(data: IProduct): Promise<IProduct> {
    return await productRepository.createProduct(data);
  }

  async getById(id: string): Promise<IProduct | null> {
    return await productRepository.getProductById(id);
  }

  async getAll(userId: string): Promise<IProduct[]> {
    return await productRepository.getAllProducts(userId);
  }

  async update(id: string, data: Partial<IProduct>): Promise<IProduct | null> {
    return await productRepository.updateProduct(id, data);
  }

  async delete(id: string): Promise<IProduct | null> {
    return await productRepository.deleteProduct(id);
  }
}

export const productService = new ProductService();

import { Request, Response } from 'express';
import { productService } from '../services/product.service';
import { IProduct } from '../models/product.model';

class ProductController {
  async create(req: Request, res: Response): Promise<void> {
    try {
      const product: IProduct = req.body;
      const createdProduct = await productService.create(product);
      res.status(201).json(createdProduct);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }

  async getById(req: Request, res: Response): Promise<any> {
    try {
      const product = await productService.getById(req.params.id);
      if (!product) {
        return res.status(404).json({ message: 'Product not found' });
      }
      res.json(product);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }

  async getAll(req: Request, res: Response): Promise<any> {
    try {
      const products = await productService.getAll();
      res.json(products);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }

  async update(req: Request, res: Response): Promise<any> {
    try {
      const product = await productService.update(req.params.id, req.body);
      if (!product) {
        return res.status(404).json({ message: 'Product not found' });
      }
      res.json(product);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }

  async delete(req: Request, res: Response): Promise<any> {
    try {
      const product = await productService.delete(req.params.id);
      if (!product) {
        return res.status(404).json({ message: 'Product not found' });
      }
      res.status(204).send();
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }
}

export const productController = new ProductController();

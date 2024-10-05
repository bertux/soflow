import axios from 'axios';
import { Product } from '../models/product';

const API_URL = 'http://localhost:4000'; // Remplacez par l'URL de votre API

const productService = {
  // Créer un produit
  createProduct: async (product: Product) => {
    const response = await axios.post(`${API_URL}/products`, product);
    return response.data;
  },

  // Lire un produit
  getProduct: async (productId: string) => {
    const response = await axios.get(`${API_URL}/products/${productId}`);
    return response.data;
  },

  // Mettre à jour un produit
  updateProduct: async (productId: string, product: Partial<Product>) => {
    const response = await axios.put(`${API_URL}/products/${productId}`, product);
    return response.data;
  },

  // Supprimer un produit
  deleteProduct: async (productId: string) => {
    const response = await axios.delete(`${API_URL}/products/${productId}`);
    return response.data;
  },

  // Obtenir tous les produits
  getAllProducts: async (userId: string) => {
    const response = await axios.get(`${API_URL}/products?userId=${userId}`);
    return response.data;
  }
};

export default productService;

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Product } from '../models/product';
import productService from '../services/productService';

const ProductListPage: React.FC = () => {
  const { id } = useParams<{ id?: string }>();
  const [product, setProduct] = useState<Product | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        if (id) {
            const response = await productService.getProduct(id)
            setProduct(response.data);
        }
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return <div className="text-center">Chargement...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  if (!product) {
    return <div className="text-center">Produit introuvable</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-900 text-white">
      <h1 className="text-3xl font-bold">{product.title}</h1>
      <div className="flex flex-col md:flex-row mt-4">
        <div className="flex-shrink-0">
          <img src={product.avatar} alt={product.title} className="w-48 h-48 object-cover" />
        </div>
        <div className="ml-4">
          <h2 className="text-xl">Les informations</h2>
          <p className="mt-2">{product.description}</p>
          <p className="mt-4 font-bold">Prix : {product.price} € / mois</p>
        </div>
      </div>

      <h2 className="text-xl mt-8">Le plan de commissions</h2>
      <div className="mt-2">
        <p>Pourcentage de commission : {product.commissionPlan.commissionRate} %</p>
        <p>Date de début : {product.commissionPlan.startAt}</p>
        <p>Date de fin : {product.commissionPlan.endAt}</p>
        {/* <p>Affilié : {product.commissionPlan.affiliate.name}</p> */}
      </div>
    </div>
  );
};

export default ProductListPage;

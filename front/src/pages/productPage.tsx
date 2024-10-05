import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Product } from '../models/product';
import productService from '../services/productService';
import { CommissionPlan } from '../models/commissionPlan';
import commissionPlanService from '../services/commissionPlanService';
import CommissionPlanList from '../components/fournisseurs/commissionsPlanList';
import Container from '../components/container';

const ProductPage: React.FC = () => {
  const { id } = useParams<{ id?: string }>();
  const [product, setProduct] = useState<Product | undefined>(undefined);
  const [commissionPlans, setCommissionPlans] = useState<CommissionPlan[] | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchProduct = async () => {
    try {
      if (id) {
          const response = await productService.getProduct(id)
          setProduct(response);
      }
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const fetchCommissionPlans = async () => {
    try {
      if (id) {
        const response = await commissionPlanService.getAllCommissionPlans(id)
        setCommissionPlans(response);
      }
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {   
    fetchProduct();
    fetchCommissionPlans();
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
    <Container>
      <h1 className="text-3xl font-bold">{product.title}</h1>
      <div className="flex flex-col md:flex-row my-4">
        <div className="flex-shrink-0">
          <img src={`/product/${product.avatar}`} alt={product.title} className="w-48 h-48 object-cover" />
        </div>
        <div className="ml-4">
          <h2 className="text-xl">Informations</h2>
          <p className="mt-2">{product.description}</p>
          <p className="text-green-400 font-bold mt-2 text-xl">Prix : {product.price} €</p>
        </div>
      </div>

      <CommissionPlanList commissionPlans={commissionPlans} />
    </Container>
  );
};

export default ProductPage;

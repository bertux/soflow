import { useEffect, useState } from "react";
import { Product } from "../models/product";
import productService from "../services/productService";
import { useUserContext } from "../context/user.context";

const ProductListPage: React.FC = () => {
  const { currentUser } = useUserContext();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        if (currentUser) {
          const data = await productService.getAllProducts(currentUser._id);
          setProducts(data);
        }
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <p className="text-center">Chargement des produits...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">Erreur : {error}</p>;
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6 text-white">Tous vos produits</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product._id}
            className="bg-gray-800 p-4 rounded-lg shadow-md transition-transform transform hover:scale-105"
          >
            <img
              src={product.avatar}
              alt={product.title}
              className="w-full h-32 object-cover rounded-t-lg"
            />
            <div className="mt-4">
              <h2 className="text-lg font-bold text-white">{product.title}</h2>
              <p className="text-gray-400">{product.description}</p>
              <p className="text-green-400 font-bold mt-2">
                {product.price} € {product.commissionPlan ? '/ mois' : ''}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductListPage;
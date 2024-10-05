import { useEffect, useState } from "react";
import { Product } from "../models/product";
import productService from "../services/productService";
import { useUserContext } from "../context/user.context";
import { Link } from "react-router-dom";
import Container from "../components/container";

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
    <Container>
      <div className="flex mb-4 justify-between items-center">
        <h1 className="text-2xl font-bold mb-6 text-white">Tous vos produits</h1>
        <button className="rounded-full bg-[#2A2F37] px-3 py-2">Ajouter un produit</button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <Link to={`/products/${product._id}`} >
            <div
              key={product._id}
              className="bg-[#1E1F21] p-4 rounded-lg shadow-md transition-transform transform hover:scale-105"
            >
              <img
                src={`/product/${product.avatar}`}
                alt={product.title}
                className="w-full h-32 object-cover rounded-t-lg imgProduct"
              />
              <div className="mt-4">
                <h2 className="text-lg font-bold text-white">{product.title}</h2>
                <p className="text-gray-400">{product.description.substring(0, 200)}...</p>
                <p className="text-green-400 font-bold mt-2 text-xl">
                  {product.price} €
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </Container>
  );
};

export default ProductListPage;
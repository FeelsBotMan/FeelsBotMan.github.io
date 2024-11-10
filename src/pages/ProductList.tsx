import { useSearchParams } from 'react-router-dom';
import { useProducts } from '../hooks/useProducts';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ProductList = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get('category');
  const { products, loading, error } = useProducts(category || undefined);

  if (loading) return <div className="text-center py-8">Loading...</div>;
  if (error) return <div className="text-center py-8 text-red-600">{error.message}</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6">
        {category ? `${category.charAt(0).toUpperCase() + category.slice(1)} Keyboards` : 'All Keyboards'}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <Card key={product.id} className="overflow-hidden">
            <img 
              src={product.imageUrl} 
              alt={product.name} 
              className="w-full h-48 object-cover"
            />
            <CardContent className="p-4">
              <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-600 mb-4">${product.price.toLocaleString()} - {product.description}</p>
              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                Buy Now
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ProductList; 
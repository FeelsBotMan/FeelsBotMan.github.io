import { useSearchParams } from 'react-router-dom';
import { useProducts } from '../../hooks/useProducts';
import { Card } from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";
import LoadingSpinner from '../../components/common/LoadingSpinner';
import { ShoppingCart, Heart } from 'lucide-react';

const ProductList = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get('category');
  const { products, loading, error } = useProducts(category || undefined);

  if (loading) return <LoadingSpinner />;
  if (error) return <div className="error-message">{error.message}</div>;


  return (
    <div className="product-list-container">
      <div className="product-list-header">
        <h1>
          {category 
            ? `${category.charAt(0).toUpperCase() + category.slice(1)} Keyboards` 
            : 'All Keyboards'}
        </h1>
        <p className="product-count">{products.length} products</p>
      </div>

      <div className="product-grid">
        {products.map((product) => (
          <Card key={product.id} className="product-card">
            <div className="product-image-container">
              <img 
                src={product.imageUrl} 
                alt={product.name} 
                className="product-image"
              />
              <div className="product-actions">
                <button className="action-button">
                  <Heart className="icon" />
                </button>
                <button className="action-button">
                  <ShoppingCart className="icon" />
                </button>
              </div>
              {product.isNew && (
                <Badge className="product-badge new">New</Badge>
              )}
              {product.discount > 0 && (
                <Badge className="product-badge discount">-{product.discount}%</Badge>
              )}
            </div>
            
            <div className="product-info">
              <h3 className="product-name">{product.name}</h3>
              <div className="product-price">
                {product.discount > 0 && (
                  <span className="original-price">
                    {product.price.toLocaleString()}원
                  </span>
                )}
                <span className="current-price">
                  {(product.price * (1 - product.discount / 100)).toLocaleString()}원
                </span>
              </div>
              <p className="product-description">{product.description}</p>
            </div>
          </Card>
        ))}
      </div>
      {products.length === 0 && (
          <div className="empty-state">
            <h2>현재 모든 상품이 품절되었습니다</h2>
            <p>빠른 시일 내에 재입고될 예정입니다.</p>
          </div>
        )}
    </div>
  );
};

export default ProductList; 
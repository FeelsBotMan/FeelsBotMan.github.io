import { useState } from 'react';
import { Product } from '../types';

const ProductList = () => {
  const [products] = useState<Product[]>([
    {
      id: 1,
      name: "기본 티셔츠",
      price: 29000,
      description: "편안한 면 소재의 기본 티셔츠",
      imageUrl: "https://via.placeholder.com/200",
      category: "의류"
    },
    // 더 많은 상품 추가 가능
  ]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {products.map((product) => (
        <div key={product.id} className="bg-white rounded-lg shadow-md p-4">
          <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover" />
          <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
          <p className="text-gray-600">{product.price.toLocaleString()}원</p>
          <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            장바구니에 담기
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList; 
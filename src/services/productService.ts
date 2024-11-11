import { Product } from '../types';

const MOCK_PRODUCTS: Record<string, Product[]> = {
  mechanical: [
    {
      id: 1,
      name: "장시간 타이핑에 최적화된 키보드",
      price: 179000,
      discount: 0,
      description: "High performance for typing and gaming",
      imageUrl: "/images/categories/keyboard1.jpg",
      category: "mechanical",
      isNew: true
    },
    // 더 많은 기계식 키보드...
  ],
  wireless: [
    {
      id: 2,
      name: "프로그래머 필수 키보드",
      price: 149000,
      discount: 0,
      description: "Convenient and portable",
      imageUrl: "/images/categories/keyboard2.jpg",
      category: "wireless",
      isNew: true
    },
    // 더 많은 무선 키보드...
  ],
  // 다른 카테고리들...
};

// 상품 목록을 가져오는 함수
export async function getProducts(category?: string): Promise<Product[]> {
  // 실제 API 구현 전까지는 목업 데이터 사용
  return new Promise((resolve) => {
    setTimeout(() => {
      if (category) {
        resolve(MOCK_PRODUCTS[category] || []);
      } else {
        resolve(Object.values(MOCK_PRODUCTS).flat());
      }
    }, 500);
  });
}

// 특정 상품의 상세 정보를 가져오는 함수
export async function getProductById(id: number): Promise<Product> {
  const response = await fetch(`/api/products/${id}`);
  if (!response.ok) {
    throw new Error('Failed to fetch product');
  }
  return response.json();
}

// 특가 상품 목록을 가져오는 함수
export async function getDeals(): Promise<Product[]> {
  const response = await fetch('/api/products/deals');
  if (!response.ok) {
    throw new Error('Failed to fetch deals');
  }
  return response.json();
} 
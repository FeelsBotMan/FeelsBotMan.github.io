export interface Product {
  id: number;
  name: string;
  price: number;
  discount: number;
  description: string;
  imageUrl: string;
  category: string;
  isNew: boolean;
}

export interface CartItem extends Product {
  quantity: number;
} 
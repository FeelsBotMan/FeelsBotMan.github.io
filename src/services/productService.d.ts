import { Product } from '../types';
export declare function getProducts(category?: string): Promise<Product[]>;
export declare function getProductById(id: number): Promise<Product>;
export declare function getDeals(): Promise<Product[]>;

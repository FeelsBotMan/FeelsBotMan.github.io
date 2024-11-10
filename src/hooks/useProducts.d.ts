import { Product } from '../types';
export declare function useProducts(category?: string): {
    products: Product[];
    loading: boolean;
    error: Error;
};
export declare function useDeals(): {
    deals: Product[];
    loading: boolean;
    error: Error;
};

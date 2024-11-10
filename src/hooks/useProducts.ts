import { useState, useEffect } from 'react';
import { Product } from '../types';
import * as productService from '../services/productService';

export function useProducts(category?: string) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const data = await productService.getProducts(category);
        setProducts(data);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to fetch products'));
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [category]);

  return { products, loading, error };
}

export function useDeals() {
  const [deals, setDeals] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchDeals = async () => {
      try {
        setLoading(true);
        const data = await productService.getDeals();
        setDeals(data);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to fetch deals'));
      } finally {
        setLoading(false);
      }
    };

    fetchDeals();
  }, []);

  return { deals, loading, error };
} 
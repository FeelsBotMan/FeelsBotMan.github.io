import { RouteObject } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import LoadingSpinner from '../components/common/LoadingSpinner';

const ProductList = lazy(() => import('../pages/products/ProductList'));
const ProductDetail = lazy(() => import('../pages/products/ProductDetail'));

export const productRoutes: RouteObject[] = [
  {
    path: '/products',
    element: <Suspense fallback={<LoadingSpinner />}><ProductList /></Suspense>
  },
  {
    path: '/products/:id',
    element: <Suspense fallback={<LoadingSpinner />}><ProductDetail /></Suspense>
  }
];
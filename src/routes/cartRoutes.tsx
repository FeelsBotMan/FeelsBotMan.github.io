import { RouteObject } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import LoadingSpinner from '../components/common/LoadingSpinner';

const Cart = lazy(() => import('../pages/cart/Cart'));
//const Checkout = lazy(() => import('../pages/cart/Checkout'));

export const cartRoutes: RouteObject[] = [
  {
    path: '/cart',
    element: <Suspense fallback={<LoadingSpinner />}><Cart /></Suspense>
  }
];
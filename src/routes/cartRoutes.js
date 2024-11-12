import { jsx as _jsx } from "react/jsx-runtime";
import { lazy, Suspense } from 'react';
import LoadingSpinner from '../components/common/LoadingSpinner';
var Cart = lazy(function () { return import('../pages/cart/Cart'); });
//const Checkout = lazy(() => import('../pages/cart/Checkout'));
export var cartRoutes = [
    {
        path: '/cart',
        element: _jsx(Suspense, { fallback: _jsx(LoadingSpinner, {}), children: _jsx(Cart, {}) })
    }
];

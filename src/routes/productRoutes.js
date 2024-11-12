import { jsx as _jsx } from "react/jsx-runtime";
import { lazy, Suspense } from 'react';
import LoadingSpinner from '../components/common/LoadingSpinner';
var ProductList = lazy(function () { return import('../pages/products/ProductList'); });
var ProductDetail = lazy(function () { return import('../pages/products/ProductDetail'); });
export var productRoutes = [
    {
        path: '/products',
        element: _jsx(Suspense, { fallback: _jsx(LoadingSpinner, {}), children: _jsx(ProductList, {}) })
    },
    {
        path: '/products/:id',
        element: _jsx(Suspense, { fallback: _jsx(LoadingSpinner, {}), children: _jsx(ProductDetail, {}) })
    }
];

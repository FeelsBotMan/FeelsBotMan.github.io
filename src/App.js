import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { createBrowserRouter, RouterProvider, Route, createRoutesFromElements } from 'react-router-dom';
import { lazy, Suspense } from 'react'; // Suspense 추가
import Layout from './components/Layout';
import ErrorBoundary from './components/ErrorBoundary';
import LoadingSpinner from './components/common/LoadingSpinner';
// lazy 임포트 수정
var Home = lazy(function () { return import('./pages/Home'); });
var ProductList = lazy(function () { return import('./pages/ProductList'); });
var Cart = lazy(function () { return import('./pages/Cart'); });
var NotFound = lazy(function () { return import('./pages/NotFound'); });
var router = createBrowserRouter(createRoutesFromElements(_jsxs(Route, { path: "/", element: _jsx(Layout, {}), errorElement: _jsx(ErrorBoundary, {}), children: [_jsx(Route, { index: true, element: _jsx(Suspense, { fallback: _jsx(LoadingSpinner, {}), children: _jsx(Home, {}) }) }), _jsx(Route, { path: "products", element: _jsx(Suspense, { fallback: _jsx(LoadingSpinner, {}), children: _jsx(ProductList, {}) }) }), _jsx(Route, { path: "cart", element: _jsx(Suspense, { fallback: _jsx(LoadingSpinner, {}), children: _jsx(Cart, {}) }) }), _jsx(Route, { path: "*", element: _jsx(Suspense, { fallback: _jsx(LoadingSpinner, {}), children: _jsx(NotFound, {}) }) })] })));
function App() {
    return _jsx(RouterProvider, { router: router });
}
export default App;

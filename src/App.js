import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { createBrowserRouter, RouterProvider, Route, createRoutesFromElements } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Layout from './components/Layout';
import ErrorBoundary from './components/ErrorBoundary';
import LoadingSpinner from './components/common/LoadingSpinner';
var Home = lazy(function () { return import('./pages/Home'); });
var ProductList = lazy(function () { return import('./pages/ProductList'); });
var Cart = lazy(function () { return import('./pages/Cart'); });
var Login = lazy(function () { return import('./pages/Login'); });
var NotFound = lazy(function () { return import('./pages/NotFound'); });
var ForgotPassword = lazy(function () { return import('./pages/ForgotPassword'); });
var SignUp = lazy(function () { return import('./pages/SignUp'); });
var router = createBrowserRouter(createRoutesFromElements(_jsxs(Route, { path: "/", element: _jsx(Layout, {}), errorElement: _jsx(ErrorBoundary, {}), children: [_jsx(Route, { index: true, element: _jsx(Suspense, { fallback: _jsx(LoadingSpinner, {}), children: _jsx(Home, {}) }) }), _jsx(Route, { path: "products", element: _jsx(Suspense, { fallback: _jsx(LoadingSpinner, {}), children: _jsx(ProductList, {}) }) }), _jsx(Route, { path: "cart", element: _jsx(Suspense, { fallback: _jsx(LoadingSpinner, {}), children: _jsx(Cart, {}) }) }), _jsx(Route, { path: "login", element: _jsx(Suspense, { fallback: _jsx(LoadingSpinner, {}), children: _jsx(Login, {}) }) }), _jsx(Route, { path: "forgot-password", element: _jsx(Suspense, { fallback: _jsx(LoadingSpinner, {}), children: _jsx(ForgotPassword, {}) }) }), _jsx(Route, { path: "signup", element: _jsx(Suspense, { fallback: _jsx(LoadingSpinner, {}), children: _jsx(SignUp, {}) }) })] })));
function App() {
    return _jsx(RouterProvider, { router: router });
}
export default App;

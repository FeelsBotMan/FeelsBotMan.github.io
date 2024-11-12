var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Outlet } from 'react-router-dom';
import { authRoutes } from './authRoutes';
import { productRoutes } from './productRoutes';
import { cartRoutes } from './cartRoutes';
import Home from '../pages/Home';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
var RootLayout = function () {
    return (_jsxs(_Fragment, { children: [_jsx(Header, {}), _jsx("main", { children: _jsx(Outlet, {}) }), _jsx(Footer, {})] }));
};
export var routes = [
    {
        path: '/',
        element: _jsx(RootLayout, {}),
        children: __spreadArray(__spreadArray(__spreadArray([
            {
                element: _jsx(Home, {}),
                index: true
            }
        ], productRoutes, true), authRoutes, true), cartRoutes, true)
    },
];

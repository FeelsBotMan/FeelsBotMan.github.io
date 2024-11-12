import { jsx as _jsx } from "react/jsx-runtime";
import { lazy } from 'react';
var Login = lazy(function () { return import('../pages/auth/Login'); });
var SignUp = lazy(function () { return import('../pages/auth/SignUp'); });
export var authRoutes = [
    {
        path: '/login',
        element: _jsx(Login, {})
    },
    {
        path: '/signup',
        element: _jsx(SignUp, {})
    }
];

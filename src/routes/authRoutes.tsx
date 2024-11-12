import { RouteObject } from 'react-router-dom';
import { lazy } from 'react';

const Login = lazy(() => import('../pages/auth/Login'));
const SignUp = lazy(() => import('../pages/auth/SignUp'));

export const authRoutes: RouteObject[] = [
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/signup',
    element: <SignUp />
  }
];
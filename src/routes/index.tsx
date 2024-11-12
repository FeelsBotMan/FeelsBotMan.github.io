import { RouteObject, Outlet } from 'react-router-dom';
import { authRoutes } from './authRoutes';
import { productRoutes } from './productRoutes';
import { cartRoutes } from './cartRoutes';
import ErrorBoundary from '../components/common/ErrorBoundary';
import Home from '../pages/Home';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';

const RootLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
export const routes: RouteObject[] = [
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        element: <Home />,
        index: true
      },
      ...productRoutes,
      ...authRoutes,
      ...cartRoutes
    ]
  },

];
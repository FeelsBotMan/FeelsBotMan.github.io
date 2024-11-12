import { 
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements
} from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Layout from './components/Layout';
import ErrorBoundary from './components/ErrorBoundary';
import LoadingSpinner from './components/common/LoadingSpinner';

const Home = lazy(() => import('./pages/Home'));
const ProductList = lazy(() => import('./pages/ProductList'));
const Cart = lazy(() => import('./pages/Cart'));
const Login = lazy(() => import('./pages/Login'));
const NotFound = lazy(() => import('./pages/NotFound'));
const ForgotPassword = lazy(() => import('./pages/ForgotPassword'));
const SignUp = lazy(() => import('./pages/SignUp'));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<Layout />}
      errorElement={<ErrorBoundary />}
    >
      <Route 
        index 
        element={
          <Suspense fallback={<LoadingSpinner />}>
            <Home />
          </Suspense>
        } 
      />
      <Route 
        path="products" 
        element={
          <Suspense fallback={<LoadingSpinner />}>
            <ProductList />
          </Suspense>
        } 
      />
      <Route 
        path="cart" 
        element={
          <Suspense fallback={<LoadingSpinner />}>
            <Cart />
          </Suspense>
        } 
      />
      <Route 
        path="login"
        element={
          <Suspense fallback={<LoadingSpinner />}>
            <Login />
          </Suspense>
        } 
      />
      <Route 
        path="forgot-password"
        element={
          <Suspense fallback={<LoadingSpinner />}>
            <ForgotPassword />
          </Suspense>
        } 
      />
      <Route 
        path="signup"
        element={
          <Suspense fallback={<LoadingSpinner />}>
            <SignUp />
          </Suspense>
        } 
      />

    </Route>
  ),
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
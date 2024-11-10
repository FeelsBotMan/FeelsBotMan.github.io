import { 
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements
} from 'react-router-dom';
import { lazy, Suspense } from 'react';  // Suspense 추가
import Layout from './components/Layout';
import ErrorBoundary from './components/ErrorBoundary';
import LoadingSpinner from './components/common/LoadingSpinner';

// lazy 임포트 수정
const Home = lazy(() => import('./pages/Home'));
const ProductList = lazy(() => import('./pages/ProductList'));
const Cart = lazy(() => import('./pages/Cart'));

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
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
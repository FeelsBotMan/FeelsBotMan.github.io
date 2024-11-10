import { Outlet } from 'react-router-dom';
import Header from './Layout/Header';
import Footer from './Layout/Footer';

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout; 
import { Outlet } from 'react-router-dom';
import Header from './Layout/Header';
import Footer from './Layout/Footer';

const Layout = () => {
  return (
    <div id="body-layout">
      <Header />
      <main id="main-layout">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout; 
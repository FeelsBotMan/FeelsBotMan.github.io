import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-xl font-bold">My Shop</Link>
          <div className="flex items-center gap-4">
            <Link to="/" className="hover:text-gray-600">홈</Link>
            <Link to="/products" className="hover:text-gray-600">상품</Link>
            <Link to="/cart" className="hover:text-gray-600">장바구니</Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header; 
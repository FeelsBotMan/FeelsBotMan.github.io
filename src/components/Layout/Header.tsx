import { Link } from 'react-router-dom';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { useState, forwardRef } from 'react';

const CATEGORIES = [
  {
    id: 1,
    name: '전체',
    link: '/products'
  },
  {
    id: 2,
    name: '기계식',
    link: '/products?category=mechanical'
  },
  {
    id: 3,
    name: '무선',
    link: '/products?category=wireless'
  },
  {
    id: 4,
    name: '게이밍',
    link: '/products?category=gaming'
  }
];

const Header = forwardRef<HTMLElement>((props, ref) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="header-container" ref={ref}>
      {/* Top Banner */}
      <div className="header-banner">
        <p>무료 배송 이벤트 진행중! 🎉</p>
      </div>

      {/* Main Header */}
      <div className="header-main">
        <div className="header-content">
          <Link to="/" className="header-logo">
            KeyboardStore
          </Link>

          {/* Desktop Navigation */}
          <nav className="header-nav desktop-nav">
            {CATEGORIES.map((category) => (
              <Link 
                key={category.id} 
                to={category.link} 
                className="nav-link"
              >
                {category.name}
              </Link>
            ))}
          </nav>

          {/* Header Actions */}
          <div className="header-actions">
            <Link to="/cart" className="cart-link">
              <ShoppingCart size={20} />
              <span className="cart-badge">0</span>
            </Link>
            <button className="menu-button" onClick={toggleMenu}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="mobile-nav">
          {CATEGORIES.map((category) => (
            <Link 
              key={category.id} 
              to={category.link} 
              className="mobile-nav-link" 
              onClick={toggleMenu}
            >
              {category.name}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
});

export default Header; 
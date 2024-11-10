import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from 'react-router-dom';
// Constants
var FEATURED_CATEGORIES = [
    {
        id: 1,
        name: '기계식 키보드',
        imageUrl: '/images/categories/keyboard1.jpg',
        link: '/products?category=mechanical'
    },
    {
        id: 2,
        name: '무선 키보드',
        imageUrl: '/images/categories/keyboard2.jpg',
        link: '/products?category=wireless'
    },
    {
        id: 3,
        name: '게이밍 키보드',
        imageUrl: '/images/categories/keyboard4.jpg',
        link: '/products?category=gaming'
    }
];
var deals = [
    {
        id: 1,
        title: '피로 없는 부드러운 키감 키보드',
        price: 129000,
        discount: 50,
        imageUrl: '/images/categories/keyboard3.jpg'
    },
    {
        id: 2,
        title: '프로그래머 필수 키보드',
        price: 149000,
        discount: 40,
        imageUrl: '/images/categories/keyboard2.jpg'
    },
    {
        id: 3,
        title: '장시간 타이핑에 최적화된 키보드',
        price: 179000,
        discount: 30,
        imageUrl: '/images/categories/keyboard1.jpg'
    }
];
var SERVICES = [
    {
        icon: '🚚',
        title: '무료 배송',
        description: '5만원 이상 구매시 무료배송'
    },
    {
        icon: '⚡️',
        title: '빠른 배송',
        description: '당일 출고 서비스'
    },
    {
        icon: '💎',
        title: '품질 보증',
        description: '100% 정품 보증'
    }
];
// Components
/*
const HeroSection: React.FC = () => (
  <section className="hero-section">
    <img src="/api/placeholder/1920/500" alt="메인 배너" className="hero-image" />
    <div className="hero-overlay" />
    <div className="hero-text">
      <h1>신상품 할인 이벤트</h1>
      <p>최대 50% 할인된 가격으로 만나보세요</p>
    </div>
  </section>
);
*/
var CategorySection = function () { return (_jsxs("section", { className: "category-section", children: [_jsx("h2", { children: "\uC778\uAE30 \uCE74\uD14C\uACE0\uB9AC" }), _jsx("div", { className: "category-grid", children: FEATURED_CATEGORIES.map(function (category) { return (_jsxs(Link, { to: category.link, className: "category-card", children: [_jsx("img", { src: category.imageUrl, alt: category.name, className: "category-image" }), _jsx("div", { className: "category-overlay", children: _jsx("h3", { children: category.name }) })] }, category.id)); }) })] })); };
var DealsSection = function () {
    return (_jsxs("section", { className: "deals-section", children: [_jsx("h2", { children: "\uC624\uB298\uC758 \uD2B9\uAC00" }), _jsx("p", { children: "24\uC2DC\uAC04 \uD55C\uC815 \uD2B9\uBCC4 \uD560\uC778" }), _jsx("div", { className: "deals-grid", children: deals.map(function (deal) { return (_jsxs("div", { className: "deal-card", children: [_jsx("img", { src: deal.imageUrl, alt: deal.title, className: "deal-image" }), _jsxs("span", { className: "discount-badge", children: [deal.discount, "% \uD560\uC778"] }), _jsx("h3", { children: deal.title }), _jsxs("p", { children: [deal.price.toLocaleString(), "\uC6D0"] })] }, deal.id)); }) })] }));
};
var ServiceSection = function () { return (_jsx("section", { className: "service-section", children: SERVICES.map(function (service, index) { return (_jsxs("div", { className: "service-card", children: [_jsxs("h3", { children: [service.icon, " ", service.title] }), _jsx("p", { children: service.description })] }, index)); }) })); };
var Home = function () { return (_jsxs("div", { className: "home-container", children: [_jsx(CategorySection, {}), _jsx(DealsSection, {}), _jsx(ServiceSection, {})] })); };
export default Home;

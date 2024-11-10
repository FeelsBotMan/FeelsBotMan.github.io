import React from 'react';
import { Link } from 'react-router-dom';

// Constants
const FEATURED_CATEGORIES = [
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

const deals = [
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
]


const SERVICES = [
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
const CategorySection: React.FC = () => (
  <section className="category-section">
    <h2>인기 카테고리</h2>
    <div className="category-grid">
      {FEATURED_CATEGORIES.map((category) => (
        <Link key={category.id} to={category.link} className="category-card">
          <img 
            src={category.imageUrl} 
            alt={category.name} 
            className="category-image" />
          <div className="category-overlay">
            <h3>{category.name}</h3>
          </div>
        </Link>
      ))}
    </div>
  </section>
);

const DealsSection: React.FC = () => {
  return (
    <section className="deals-section">
      <h2>오늘의 특가</h2>
      <p>24시간 한정 특별 할인</p>
      <div className="deals-grid">
        {deals.map((deal) => (
          <div key={deal.id} className="deal-card">
            <img src={deal.imageUrl} alt={deal.title} className="deal-image" />
            <span className="discount-badge">{deal.discount}% 할인</span>
            <h3>{deal.title}</h3>
            <p>{deal.price.toLocaleString()}원</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const ServiceSection: React.FC = () => (
  <section className="service-section">
    {SERVICES.map((service, index) => (
      <div key={index} className="service-card">
        <h3>{service.icon} {service.title}</h3>
        <p>{service.description}</p>
      </div>
    ))}
  </section>
);

const Home: React.FC = () => (
  <div className="home-container">
    <CategorySection />
    <DealsSection />
    <ServiceSection />
  </div>
);

export default Home;

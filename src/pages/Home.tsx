import { Link } from 'react-router-dom';

const Home = () => {
  const featuredCategories = [
    {
      id: 1,
      name: '의류',
      imageUrl: 'https://via.placeholder.com/400x300',
      link: '/products?category=clothing'
    },
    {
      id: 2,
      name: '신발',
      imageUrl: 'https://via.placeholder.com/400x300',
      link: '/products?category=shoes'
    },
    {
      id: 3,
      name: '액세서리',
      imageUrl: 'https://via.placeholder.com/400x300',
      link: '/products?category=accessories'
    }
  ];

  return (
    <div className="space-y-10">
      {/* 히어로 섹션 */}
      <section className="relative h-[500px]">
        <div className="absolute inset-0 bg-gray-900 bg-opacity-50">
          <img
            src="https://via.placeholder.com/1920x500"
            alt="메인 배너"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative h-full flex items-center justify-center text-center text-white">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold">신상품 할인 이벤트</h1>
            <p className="text-xl md:text-2xl">최대 50% 할인된 가격으로 만나보세요</p>
            <Link
              to="/products"
              className="inline-block bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100"
            >
              쇼핑하기
            </Link>
          </div>
        </div>
      </section>

      {/* 카테고리 섹션 */}
      <section className="py-12">
        <h2 className="text-3xl font-bold text-center mb-8">인기 카테고리</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredCategories.map((category) => (
            <Link
              key={category.id}
              to={category.link}
              className="group relative overflow-hidden rounded-lg shadow-lg"
            >
              <img
                src={category.imageUrl}
                alt={category.name}
                className="w-full h-64 object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <h3 className="text-white text-2xl font-bold">{category.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 특가 상품 섹션 */}
      <section className="bg-gray-50 py-12 rounded-xl">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold">오늘의 특가</h2>
          <p className="text-gray-600 mt-2">24시간 한정 특별 할인</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 px-4">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={`https://via.placeholder.com/300x300`}
                alt="특가 상품"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold">특가 상품 {item}</h3>
                <p className="text-red-500 font-bold mt-2">50% 할인</p>
                <p className="text-gray-900 font-bold">29,000원</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 서비스 특징 섹션 */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12">
        <div className="text-center">
          <div className="text-4xl mb-4">🚚</div>
          <h3 className="font-bold mb-2">무료 배송</h3>
          <p className="text-gray-600">5만원 이상 구매시 무료배송</p>
        </div>
        <div className="text-center">
          <div className="text-4xl mb-4">⚡️</div>
          <h3 className="font-bold mb-2">빠른 배송</h3>
          <p className="text-gray-600">당일 출고 서비스</p>
        </div>
        <div className="text-center">
          <div className="text-4xl mb-4">💎</div>
          <h3 className="font-bold mb-2">품질 보증</h3>
          <p className="text-gray-600">100% 정품 보증</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
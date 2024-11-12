import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <section className="error-container">
      <div className="error-content">
        <div className="error-card">
          <div className="error-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="8" x2="12" y2="12"></line>
              <line x1="12" y1="16" x2="12.01" y2="16"></line>
            </svg>
          </div>
          <h1>404</h1>
          <p>페이지를 찾을 수 없습니다</p>
          <button onClick={() => navigate('/')}>
            홈으로 돌아가기
          </button>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
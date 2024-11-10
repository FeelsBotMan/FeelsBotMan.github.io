import { useRouteError, isRouteErrorResponse } from 'react-router-dom';
import '../assets/styles/pages/error.css';

export default function ErrorBoundary() {
  const error = useRouteError();
  
  let errorMessage: string;

  if (isRouteErrorResponse(error)) {
    // 라우트 관련 에러일 경우
    errorMessage = error.data?.message || '페이지를 찾을 수 없습니다.';
  } else if (error instanceof Error) {
    // 일반적인 Error 객체일 경우
    errorMessage = error.message;
  } else if (typeof error === 'string') {
    // 문자열 에러일 경우
    errorMessage = error;
  } else {
    // 기타 경우
    errorMessage = '알 수 없는 오류가 발생했습니다.';
  }


const ErrorSection: React.FC = () => {
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
          <h1>죄송합니다. 오류가 발생했습니다.</h1>
          <p>{errorMessage}</p>
          <button onClick={() => window.location.href = '/'}>
            홈으로 돌아가기
          </button>
        </div>
      </div>
    </section>
  );
};


  return (
    <ErrorSection />
  );
}
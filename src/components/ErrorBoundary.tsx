import { useRouteError, isRouteErrorResponse } from 'react-router-dom';

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

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center p-8 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-red-600 mb-4">
          죄송합니다. 오류가 발생했습니다.
        </h1>
        <p className="text-gray-600 mb-4">{errorMessage}</p>
        <button 
          onClick={() => window.location.href = '/'}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          홈으로 돌아가기
        </button>
      </div>
    </div>
  );
}
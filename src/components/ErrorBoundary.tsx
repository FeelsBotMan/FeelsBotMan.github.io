import { useRouteError, isRouteErrorResponse } from 'react-router-dom';
import '../assets/styles/pages/error.css';
import ErrorPage from './common/ErrorPage';

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
    <ErrorPage
      title="죄송합니다. 오류가 발생했습니다."
      message={errorMessage}
    />
  );
}
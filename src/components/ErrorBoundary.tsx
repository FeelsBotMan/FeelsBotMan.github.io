import { useRouteError, isRouteErrorResponse } from 'react-router-dom';
import ErrorPage from './common/ErrorPage';
import Layout from './Layout';

export default function ErrorBoundary() {
  const error = useRouteError();
  console.error('Error:', error);
  
  let errorMessage: string;

  if (isRouteErrorResponse(error)) {
    errorMessage = error.data?.message || '페이지를 찾을 수 없습니다.';
  } else if (error instanceof Error) {
    errorMessage = error.message;
  } else if (typeof error === 'string') {
    errorMessage = error;
  } else {
    errorMessage = '알 수 없는 오류가 발생했습니다.';
  }

  return (
      <ErrorPage
        title="죄송합니다. 오류가 발생했습니다."
        message={errorMessage}
      />
  );
}
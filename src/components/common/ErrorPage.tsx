interface ErrorPageProps {
    title: string;
    message: string;
    buttonText?: string;
    onButtonClick?: () => void;
  }
  
  const ErrorPage: React.FC<ErrorPageProps> = ({
    title,
    message,
    buttonText = '홈으로 돌아가기',
    onButtonClick = () => window.location.href = '/'
  }) => {
    const displayMessage = import.meta.env.PROD
    ? '페이지를 불러오는 중 문제가 발생했습니다. 잠시 후 다시 시도해 주세요.'
    : message;

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
          <h1>{title}</h1>
          <p>{displayMessage}</p>
          <button onClick={onButtonClick}>
            {buttonText}
          </button>
        </div>
      </div>
      </section>
    );
  };
  
  export default ErrorPage;
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
            <p>{message}</p>
            <button onClick={onButtonClick}>
              {buttonText}
            </button>
          </div>
        </div>
      </section>
    );
  };
  
  export default ErrorPage;
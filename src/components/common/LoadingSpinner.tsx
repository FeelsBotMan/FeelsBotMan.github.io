const LoadingSpinner = () => {
    return (
      <div className="loading-container">
        <svg
          className="loading-spinner"
          viewBox="0 0 50 50"
          width="50"
          height="50"
        >
          <circle
            className="spinner-circle"
            cx="25"
            cy="25"
            r="20"
            fill="none"
            strokeWidth="4"
          />
        </svg>
      </div>
    );
  };
  
  export default LoadingSpinner;
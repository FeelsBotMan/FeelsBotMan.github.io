const LoadingSpinner = () => {
    return (
      <div className="loading-container">
        <svg
          className="loading-spinner"
          viewBox="0 0 50 50"
          width="80"
          height="80"
        >
          <circle
            className="spinner-circle"
            cx="25"
            cy="25"
            r="20"
            fill="none"
            strokeWidth="5"
          />
        </svg>
      </div>
    );
  };
  
  export default LoadingSpinner;
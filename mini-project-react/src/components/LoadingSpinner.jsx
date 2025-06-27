import '../styles/LoadingSpinner.css';

export default function LoadingSpinner() {
  return (
    <div className="weather-card loading">
      <div className="loading-animation">
        <div className="weather-icon-loading">🌤️</div>
        <div className="loading-text">Fetching weather data...</div>
        <div className="loading-dots">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
}
import LoadingSpinner from './LoadingSpinner';
import { getWeatherBackground } from '../utils/weatherUtils';
import '../styles/WeatherDisplay.css';

export default function WeatherDisplay({ weatherData, isLoading }) {
  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (!weatherData) return null;

  const { city, temp, tempMin, tempMax, humidity, feelsLike, weather, icon } = weatherData;

  return (
    <div className="weather-card" style={{ background: getWeatherBackground(weather) }}>
      <div className="weather-content">
        <div className="weather-header">
          <div className="weather-icon animate-bounce">{icon}</div>
          <div className="city-name">{city}</div>
        </div>
        
        <div className="temperature-main">
          <span className="temp-value">{temp}°</span>
          <span className="temp-unit">C</span>
        </div>
        
        <div className="weather-description">{weather}</div>
        
        <div className="weather-details">
          <div className="detail-item">
            <span className="detail-label">Feels like</span>
            <span className="detail-value">{feelsLike}°C</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Humidity</span>
            <span className="detail-value">{humidity}%</span>
          </div>
        </div>
        
        <div className="temp-range">
          <div className="temp-range-item">
            <span className="range-label">Min</span>
            <span className="range-value">{tempMin}°</span>
          </div>
          <div className="temp-range-divider"></div>
          <div className="temp-range-item">
            <span className="range-label">Max</span>
            <span className="range-value">{tempMax}°</span>
          </div>
        </div>
      </div>
    </div>
  );
}

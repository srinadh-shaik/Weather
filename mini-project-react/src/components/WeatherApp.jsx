import { useState } from 'react';
import SearchBox from './SearchBox';
import WeatherDisplay from './WeatherDisplay';
import AnimatedBackground from './AnimatedBackground';
import Toast from './Toast';
import { fetchWeatherByCity } from '../services/weatherAPI';
import '../styles/WeatherApp.css';

export default function WeatherApp() {
  const [weatherData, setWeatherData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [toast, setToast] = useState({ visible: false, message: '', type: 'info' });

  const showToast = (message, type = 'info') => {
    setToast({ visible: true, message, type });
  };

  const hideToast = () => {
    setToast({ ...toast, visible: false });
  };

  const handleSearch = async (city) => {
    setIsLoading(true);
    showToast("Fetching weather data...", "info");

    try {
      const data = await fetchWeatherByCity(city);
      setWeatherData(data);
      showToast(`Weather data loaded for ${city}!`, "success");
    } catch (error) {
      showToast("Failed to fetch weather data", "error");
      console.error('Weather fetch error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="weather-app">
      <AnimatedBackground />
      
      <div className="app-container">
        <div className="app-header">
          <h1 className="app-title">
            <span className="title-icon">🌦️</span>
            Weather Forecast
          </h1>
          <p className="app-subtitle">Discover weather conditions around the world</p>
        </div>

        <SearchBox 
          onSearch={handleSearch} 
          isLoading={isLoading}
          onToast={showToast}
        />

        <WeatherDisplay 
          weatherData={weatherData} 
          isLoading={isLoading} 
        />
        
        <Toast 
          message={toast.message}
          type={toast.type}
          visible={toast.visible}
          onClose={hideToast}
        />
      </div>
    </div>
  );
}
import { useState } from 'react';
import '../styles/SearchBox.css';

export default function SearchBox({ onSearch, isLoading, onToast }) {
  const [city, setCity] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const cleanedCity = city.trim().replace(/\s+/g, ' ');
    
    if (!cleanedCity) {
      onToast("Please enter a city name", "error");
      return;
    }

    await onSearch(cleanedCity);
    setCity("");
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit(e);
    }
  };

  return (
    <div className="search-form">
      <div className="input-container">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city name..."
          className="city-input"
          autoFocus
          onKeyPress={handleKeyPress}
        />
        <button 
          onClick={handleSubmit}
          className="search-button"
          disabled={!city.trim() || isLoading}
        >
          <span className="button-icon">🔍</span>
          Search
        </button>
      </div>
    </div>
  );
}
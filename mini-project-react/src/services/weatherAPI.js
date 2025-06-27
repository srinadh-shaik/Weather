const API_KEY = "ca9ef07f470d2dc6d657799da0a2f73e";
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

export const fetchWeatherByCity = async (city) => {
  try {
    const url = `${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error('City not found');
    }

    const data = await response.json();

    return {
      city: data.name,
      temp: Math.round(data.main.temp),
      tempMin: Math.round(data.main.temp_min),
      tempMax: Math.round(data.main.temp_max),
      humidity: data.main.humidity,
      feelsLike: Math.round(data.main.feels_like),
      weather: data.weather[0].description,
      icon: getWeatherIcon(data.weather[0].main)
    };

  } catch (error) {
    console.error("Error fetching weather data:", error);
    throw error;
  }
};

// Helper function to get weather icon
const getWeatherIcon = (weatherMain) => {
  const iconMap = {
    'Clear': '☀️',
    'Clouds': '☁️',
    'Rain': '🌧️',
    'Drizzle': '🌦️',
    'Thunderstorm': '⛈️',
    'Snow': '❄️',
    'Mist': '🌫️',
    'Smoke': '🌫️',
    'Haze': '🌫️',
    'Dust': '🌪️',
    'Fog': '🌫️',
    'Sand': '🌪️',
    'Ash': '🌋',
    'Squall': '💨',
    'Tornado': '🌪️'
  };

  return iconMap[weatherMain] || '🌤️';
};

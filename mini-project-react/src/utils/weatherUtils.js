export const getWeatherBackground = (weather) => {
    const backgrounds = {
      'sunny': 'linear-gradient(135deg, #FFD93D 0%, #FF8C42 100%)',
      'cloudy': 'linear-gradient(135deg, #74b9ff 0%, #0984e3 100%)',
      'rainy': 'linear-gradient(135deg, #636e72 0%, #2d3436 100%)',
      'partly cloudy': 'linear-gradient(135deg, #a29bfe 0%, #6c5ce7 100%)'
    };
    return backgrounds[weather] || backgrounds['sunny'];
  };
  
  export const formatTemperature = (temp) => {
    return Math.round(temp);
  };
  
  export const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  
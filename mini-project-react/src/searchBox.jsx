import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './SearchBox.css';
import { fetchWeatherByCity } from '../api/weather';
import WeatherDisplay from '../components/weatherDisplay';

export default function SearchBox() {
    const [city, setCity] = useState("");
    const [weatherData,setWeatherData] = useState("");
    const [error,setError] = useState(false);
    // const API_KEY = "ca9ef07f470d2dc6d657799da0a2f73e";
    // const API_URL = "https://api.openweathermap.org/data/2.5/weather";

    // let getWeatherInfo = async () =>{
    //     let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}`)
    //     let jsonResponse = await response.json();
    //     console.log(jsonResponse);
    // }

  const handleChange = (event) => {
    setCity(event.target.value);
  };

  const handleSubmit = async (event) => {

    event.preventDefault();


    const cleanedCity = city.trim().replace(/\s+/g, ' ');

    //for empty data
    if (!cleanedCity) {
      toast.error("Please enter a city name", {
        position: "top-center",
        autoClose: 2000,
      });
      return;
    }

    try{
        toast.info("Fetching Weather ..." ,{position: "top-center",autoClose:500});
        const weatherData = await fetchWeatherByCity(cleanedCity);

        console.log(weatherData);
        
        setWeatherData(weatherData);

        console.log("Searching weather for:", cleanedCity);
        
        toast.success(`Searching weather for ${cleanedCity}`, {
          position: "top-center",
          autoClose: 1000,
        });

    }
    catch(err){
        toast.error("Erro Loading data",{position:"top-center",autoClose:3000});
        setError(true);
    }
    setCity("");
    
  };

  return (
    <Box className="SearchBox" sx={{ mt: 3, textAlign: 'center' }}>
      <h3>Search for the Weather</h3>
      <form onSubmit={handleSubmit}>
        <Stack spacing={2} alignItems="center">
          <TextField
            id="city"
            label="Enter City"
            variant="outlined"
            value={city}
            onChange={handleChange}
            required
            autoFocus/>
          <Button
            variant="contained"
            color="success"
            type="submit"
            disabled={!city.trim()}>
            Search
          </Button>
        </Stack>
      </form>
      <Stack spacing = {20} alignItems = "normal">
        {error && <h2 style = {{color:"red"}}>No such place is available in our api coverage :(</h2>}
        <WeatherDisplay weatherData={weatherData}/>
      </Stack>
      <ToastContainer />
    </Box>
  );
}

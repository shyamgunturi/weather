import React, { useState } from 'react';

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');

  const generateRandomWeatherData = () => {
    return {
      temperature: (Math.random() * 40).toFixed(1), // Random temperature between 0 and 40°C
      feels_like: (Math.random() * 40).toFixed(1),
      windspeed: (Math.random() * 15).toFixed(1), // Random wind speed between 0 and 15 m/s
      winddirection: Math.floor(Math.random() * 360), // Random wind direction between 0 and 360°
      time: new Date().toLocaleString(), // Current date and time
    };
  };

  const handleSearch = () => {
    setError('');
    setWeather(generateRandomWeatherData());
  };

  const handleReset = () => {
    setCity('');
    setWeather(null);
    setError('');
  };

  const backgroundStyle = {
    backgroundImage: "url('https://img.freepik.com/free-vector/flat-design-monsoon-season-clouds-illustration_23-2149424294.jpg')", // Replace with your chosen image URL
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <div style={backgroundStyle}>
      <div className="p-6 max-w-md w-full bg-white/80 rounded-lg shadow-lg backdrop-blur-md">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Weather Now</h1>
        
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city"
          className="border p-2 w-full mb-4 rounded-md focus:outline-none focus:border-blue-500"
        />

        <div className="flex space-x-4 mb-4">
          <button 
            onClick={handleSearch} 
            className="bg-blue-600 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-blue-700 hover:shadow-xl transition duration-200 ease-in-out"
          >
            Get Weather
          </button>
          <button 
            onClick={handleReset} 
            className="bg-red-600 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-red-700 hover:shadow-xl transition duration-200 ease-in-out"
          >
            Reset
          </button>
        </div>

        {error && <p className="text-red-500 mt-4 text-center">{error}</p>}

        {weather && (
          <div className="mt-6 p-4 border-2 border-gray-300 rounded-lg shadow-md bg-gray-100 text-gray-800">
            <h2 className="text-2xl font-semibold text-center mb-4">Weather in {city || "your location"}</h2>
            <div className="space-y-2">
              <p>Temperature: <span className="font-semibold">{weather.temperature}°C</span></p>
              <p>Feels Like: <span className="font-semibold">{weather.feels_like}°C</span></p>
              <p>Wind Speed: <span className="font-semibold">{weather.windspeed} m/s</span></p>
              <p>Wind Direction: <span className="font-semibold">{weather.winddirection}°</span></p>
              <p>Time: <span className="font-semibold">{weather.time}</span></p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;

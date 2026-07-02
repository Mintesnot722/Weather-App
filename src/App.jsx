import Header from "../components/Header";
import SearchBar from "../components/Searchbar";
import Weathercard from "../components/Weathercard";
import WeatherDetails from "../components/Weatherdetails";
import Footer from "../components/Footer";
import weatherDescriptions from "./condition";
import "./App.css";
import React from "react";

function App() {
  const [city, setCity] = React.useState("");
  const [weather, setWeather] = React.useState(null);

  // const [loading, setLoading] = React.useState(false);
  // const [error, setError] = React.useState("");

  const [now, setNow] = React.useState(new Date());

  React.useEffect(() => {
    const interval = setInterval(() => {
      setNow(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const searchWeather = () => {
    if (!city) return;

    // STEP 1: get coordinates
    fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}`,
    )
      .then((res) => res.json())
      .then((data) => {
        if (!data.results || data.results.length === 0) {
          alert("City not found");
          return;
        }

        const cityInfo = data.results[0];

        // STEP 2: get weather
        return fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${cityInfo.latitude}&longitude=${cityInfo.longitude}&current_weather=true&hourly=apparent_temperature,pressure_msl,relative_humidity_2m`,
        );
      })
      .then((res) => res.json())
      .then((weatherData) => {
        const current = weatherData.current_weather;
        const hourly = weatherData.hourly;

        const lastIndex = hourly.time.length - 1;

        setWeather({
          temperature: current.temperature,
          windspeed: current.windspeed,
          winddirection: current.winddirection,
          weathercode: current.weathercode,
          feelsLike: hourly.apparent_temperature[lastIndex],
          pressure: hourly.pressure_msl[lastIndex],
          humidity: hourly.relative_humidity_2m[lastIndex],
          time: current.time,
        });
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Header />
      <SearchBar city={city} setCity={setCity} searchWeather={searchWeather} />
      {weather && (
        <Weathercard
          city={city}
          setCity={setCity}
          time={now.toLocaleString()}
          temperature={weather.temperature}
          condition={weatherDescriptions[weather.weathercode]}
        />
      )}
      {weather && (
        <WeatherDetails
          humidity={weather.humidity}
          pressure={weather.pressure}
          wind={weather.windspeed}
          feelsLike={weather.feelsLike}
        />
      )}
      <Footer />
    </>
  );
}

export default App;

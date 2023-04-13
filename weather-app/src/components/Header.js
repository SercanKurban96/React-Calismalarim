import React from "react";
import { useWeather } from "../context/WeatherContext";
import cities from "../cities.json";

function Header() {
  const { setCity } = useWeather();
  const handleChange = (citySelect) => {
    setCity(citySelect.target.value);
  };
  return (
    <div className="Header">
      <select onChange={handleChange}>
        {cities.map((city) => (
          <option key={city.id}> {city.name}</option>
        ))}
      </select>
    </div>
  );
}

export default Header;

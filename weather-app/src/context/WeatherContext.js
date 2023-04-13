import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const WeatherContext = createContext();
export const WeatherProvider = ({ children }) => {
  const [weather, setWeather] = useState();
  const [city, setCity] = useState("Adana");
  const [current, setCurrent] = useState();

  useEffect(() => {
    const api = "7b52f3da42162e794352716cb370a55c";
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${api}&units=metric&lang=tr&cnt=7`;
    axios(url).then((res) => {
      setWeather(res.data.list);
      res.data.list.map((item) => setCurrent(item.main));
    });
  }, [city]);
  const values = { weather, setWeather, city, setCity, current };

  return (
    <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>
  );
};

export const useWeather = () => useContext(WeatherContext);

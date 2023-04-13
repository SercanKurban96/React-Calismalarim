import React, { useEffect, useState } from "react";
import { useWeather } from "../context/WeatherContext";

function Card() {
  const { weather, current } = useWeather();
  const [day, setDay] = useState();
  const daysOfWeek = [
    "Pazartesi",
    "Salı",
    "Çarşamba",
    "Perşembe",
    "Cuma",
    "Cumartesi",
    "Pazar",
  ];

  useEffect(() => {
    !weather ? console.log("Yükleniyor...") : console.log("Yüklendi!");

    setDay(daysOfWeek);
  }, [weather]);

  const icon = `http://openweathermap.org/img/w/`;

  return (
    <div className="Card">
      <>
        {weather &&
          weather.map((item, id) =>
            item.weather.map((weather) => (
              <div key={weather.id}>
                <h1>{day[id]}</h1>
                <img src={icon + weather.icon + ".png"} alt="" />
                <br />
                <h3>{weather.description}</h3>
                <h3>
                  {current.temp_min} °C {current.temp_max} °C
                </h3>
              </div>
            ))
          )}
      </>
    </div>
  );
}

export default Card;

import React, { useState, useEffect } from "react";
import axios from "axios";
import "./NavBarStyles.css";

const AllForecasts = () => {
  const [forecasts, setForecasts] = useState([]);

  const fetchAllForecasts = async () => {
    try {
      const forecastsResponse = await axios.get(
        "http://localhost:8080/api/forecasts"
      );
      setForecasts(forecastsResponse.data);
    } catch (err) {
      console.log("SOMETHING BROKE 😢");
      console.error(err);
    }
  };

  useEffect(() => {
    fetchAllForecasts();
  }, []);

  console.log("forecasts", forecasts);
  return (
    <div>
      <h1>All Forecasts</h1>
      <ul>
        {forecasts.map((forecast) => (
          <li key={forecast.id}>{forecast.temperature}</li>
        ))}
      </ul>
    </div>
  );
};

export default AllForecasts;

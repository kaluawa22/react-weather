import React from 'react'
import { useState } from "react";


const ForecastList = (props) =>{



    return (
    <div>
        <h2>Weather Forecast List</h2>
       
        {props.forecastData.list ? (
            
            // <p>{forecastData.list[0].main.temp}</p>
            <ul>
            {props.forecastData.list.map((item, index) => (
            <li key={index}>
                <p>Date and Time: {item.dt_txt}</p>
                <p>Temperature: {props.kelvinToF(item.main.temp)}°F</p>
                <p>Humidity: {item.main.humidity}%</p>
                <p>Weather: {item.weather[0].description}</p>
                <p>Sea Level: {item.main.sea_level}</p>
            </li>
            )) }
        </ul>
          ) : (
            <h1>Loading</h1>
          )}

        {/* <ul>
            {forecastData?.list?.map((item, index) => (
            <li key={index}>
                <p>Date and Time: {item.dt_txt}</p>
                <p>Temperature: {item.main.temp}°C</p>
                <p>Humidity: {item.main.humidity}%</p>
                <p>Weather: {item.weather[0].description}</p>
            </li>
            ))}
        </ul> */}
    </div>
      
    );       
}


export default ForecastList;
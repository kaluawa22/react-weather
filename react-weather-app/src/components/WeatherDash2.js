import React from 'react'
import { useState } from "react";


const WeatherDash = (props) => {
    return (
      <div className="container-fluid px-1 px-sm-3 py-5 mx-auto">
        {props.forecastData.list ? (
          <div className="row d-flex justify-content-center">
            <div className="row card0">
              <div className="card1 col-lg-8 col-md-7">
                <small>the.weather</small>
                <div className="text-center">
                  <img className="image mt-5" src="https://i.imgur.com/M8VyA2h.png" />
                </div>
                <div className="row px-3 mt-3 mb-3">
                  <h1 className="large-font mr-3">{props.kelvinToF(props.forecastData.list[0].main.temp)}°F</h1>
                  <div className="d-flex flex-column mr-3">
                    <h2 className="mt-3 mb-0">{props.forecastData.city.name}</h2>
                    <small>10:36 - Tuesday, 22 Oct '19</small>
                  </div>
                  <div className="d-flex flex-column text-center">
                    <h3 className="fa fa-sun-o mt-4" />
                    <small>{props.forecastData.list[0].weather[0].description}</small>
                  </div>
                </div>
              </div>
              <div className="card2 col-lg-4 col-md-5">
                <div className="row px-3">
                  <input
                    type="text"
                    id="location-name"
                    placeholder="Location"
                    name="location"
                    className="mb-5"
                    onChange={props.inputHandler}
                    value={props.getState}
                  />
                  <button className="btn btn-primary mt-2" onClick={props.submitHandler}>
                    Search
                  </button>
                </div>
                <div className="mr-5">
                  <p className="light-text suggestion">Birmingham</p>
                  <p className="light-text suggestion">Manchester</p>
                  <p className="light-text suggestion">New York</p>
                  <p className="light-text suggestion">California</p>
                  <div className="line my-5" />
                  <p>Weather Details</p>
                  <div className="row px-3">
                    <p className="light-text">Cloudy</p>
                    <p className="ml-auto">12%</p>
                  </div>
                  <div className="row px-3">
                    <p className="light-text">Humidity</p>
                    <p className="ml-auto">78%</p>
                  </div>
                  <div className="row px-3">
                    <p className="light-text">Wind</p>
                    <p className="ml-auto">1km/h</p>
                  </div>
                  <div className="row px-3">
                    <p className="light-text">Rain</p>
                    <p className="ml-auto">0mm</p>
                  </div>
                  <div className="line mt-3" />
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="row d-flex justify-content-center">
            <div className="row card0">
              <div className="card1 col-lg-8 col-md-7">
                <small>the.weather</small>
                <div className="text-center">
                  <img className="image mt-5" src="https://i.imgur.com/M8VyA2h.png" />
                </div>
                <div className="row px-3 mt-3 mb-3">
                  <h1 className="large-font mr-3">Placeholder°F</h1>
                  <div className="d-flex flex-column mr-3">
                    <h2 className="mt-3 mb-0">PlaceHolder</h2>
                    <small>10:36 - Tuesday, 22 Oct '19</small>
                  </div>
                  <div className="d-flex flex-column text-center">
                    <h3 className="fa fa-sun-o mt-4" />
                    <small>placeholder weather description</small>
                  </div>
                </div>
              </div>
              <div className="card2 col-lg-4 col-md-5">
                <div className="row px-3">
                  <input
                    type="text"
                    id="location-name"
                    placeholder="Location"
                    name="location"
                    className="mb-5"
                    onChange={props.inputHandler}
                    value={props.getState}
                  />
                  <button className="btn btn-primary mt-2" onClick={props.submitHandler}>
                    Search
                  </button>
                </div>
                <div className="mr-5">
                  <p className="light-text suggestion">Birmingham</p>
                  <p className="light-text suggestion">Manchester</p>
                  <p className="light-text suggestion">New York</p>
                  <p className="light-text suggestion">California</p>
                  <div className="line my-5" />
                  <p>Weather Details</p>
                  <div className="row px-3">
                    <p className="light-text">Cloudy</p>
                    <p className="ml-auto">pleaceholder%</p>
                  </div>
                  <div className="row px-3">
                    <p className="light-text">Humidity</p>
                    <p className="ml-auto">pleaceholder%</p>
                  </div>
                  <div className="row px-3">
                    <p className="light-text">Wind</p>
                    <p className="ml-auto">pleaceholderkm/h</p>
                  </div>
                  <div className="row px-3">
                    <p className="light-text">Rain</p>
                    <p className="ml-auto">pleaceholder mm</p>
                  </div>
                  <div className="line mt-3" />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };
  
  export default WeatherDash;
  
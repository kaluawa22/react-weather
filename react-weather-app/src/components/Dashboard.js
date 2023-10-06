import React from 'react'
import { useState } from "react";


const Dashboard = (props) =>{



    return (
        <div className='weather-dashboard'>
            <div className="padding">
                <div className="row container d-flex justify-content-center">
                    <div className="mt-3 d-flex flex-column justify-content-center align-items-center">
                        <div class="col-auto">
                            <label for="location-name" class="col-form-label">
                            Enter Location :
                            </label>
                        </div>
                        <div class="col-auto">
                            <input
                            type="text"
                            id="location-name"
                            class="form-control"
                            onChange={props.inputHandler}
                            value={props.getState}
                            />
                        </div>
                        <button className="btn btn-primary mt-2" onClick={props.submitHandler}>
                            Search
                        </button>
                    </div>
                    <div className="col-lg-8 grid-margin stretch-card">
                      
                        {props.forecastData? (
                        <div className="card card-weather">
                            <div className="card-body">
                                <div className="weather-date-location">
                                    <h3>Friday</h3>
                                    <p className="text-gray">
                                    <span className="weather-date"></span>
                                    <span className="weather-location"><strong>{' '}</strong></span>
                                    </p>
                                </div>
                                <div className="weather-data d-flex">
                                    <div className="mr-auto">
                                    <h4 className="display-3">{' '}
                                        <span className="symbol">&deg;</span>F</h4>
                                    <p>
                                        Cloudy
                                    </p>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body p-0">
                                <div className="d-flex weakly-weather">
                                    <div className="weakly-weather-item">
                                    <p className="mb-0">
                                        Sun
                                    </p>
                                    <i className="mdi mdi-weather-cloudy"></i>
                                    <p className="mb-0">
                                        30&deg;
                                    </p>
                                    </div>
                                    <div className="weakly-weather-item">
                                    <p className="mb-1">
                                        Mon
                                    </p>
                                    <i className="mdi mdi-weather-hail"></i>
                                    <p className="mb-0">
                                        31&deg;
                                    </p>
                                    </div>
                                    
                                    <div className="weakly-weather-item">
                                    <p className="mb-1">
                                        Tue
                                    </p>
                                    <i className="mdi mdi-weather-partlycloudy"></i>
                                    <p className="mb-0">
                                        28&deg;
                                    </p>
                                    </div>
                                    <div className="weakly-weather-item">
                                    <p className="mb-1">
                                        Wed
                                    </p>
                                    <i className="mdi mdi-weather-pouring"></i>
                                    <p className="mb-0">
                                        30&deg;
                                    </p>
                                    </div>
                                    <div className="weakly-weather-item">
                                    <p className="mb-1">
                                        Thu
                                    </p>
                                    <i className="mdi mdi-weather-pouring"></i>
                                    <p className="mb-0">
                                        29&deg;
                                    </p>
                                    </div>
                                    <div className="weakly-weather-item">
                                    <p className="mb-1">
                                        Fri
                                    </p>
                                    <i className="mdi mdi-weather-snowy-rainy"></i>
                                    <p className="mb-0">
                                        31&deg;
                                    </p>
                                    </div>
                                    <div className="weakly-weather-item">
                                    <p className="mb-1">
                                        Sat
                                    </p>
                                    <i className="mdi mdi-weather-snowy"></i>
                                    <p className="mb-0">
                                        32&deg;
                                    </p>
                                </div>
                            </div>
                            </div>
                        </div>

                            
                            
                            
                            
                            ) : (

                                <h1>Loading</h1>
                            
                            
                            
                            
                            )}
                    </div>
                </div>
            </div>
        </div>
    )       
}


export default Dashboard;
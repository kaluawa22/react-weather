import React from "react";
import { useState, useEffect } from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
  MDBTypography,
  MDBInputGroup,
} from "mdb-react-ui-kit";
import ErrorAlert from './ErrorAlert';
// Fontawesome module for icons

import WeatherIcon from "./WeatherIcon";
import SearchBar from "./SearchBar";

export default function Card(props) {
  // const [showAlert, setShowAlert] = useState(false);
  // const handleShowAlert = () => {
  //   setShowAlert(true);

  //   // Reset errorStatus after showing the alert
  //   props.resetErrorStatus();
  // };


    return (
    <section className="vh-100" style={{ }}>
        
        {props.forecastData.list && props.locationData ? (
            <MDBContainer className="h-70">
              <MDBRow
                className="justify-content-center align-items-center h-100"
                style={{ color: "#282828" }}
              >
                <MDBCol md="9" lg="7" xl="5">
                  {/* <SearchBar
                    inputHandler = {props.inputHandler}
                    submitHandler = {props.submitHandler}
                    getState = {props.getState}
                    errorStatus = {props.errorStatus}
                  /> */}
                  <MDBCard
                    className="mb-4 gradient-custom"
                    style={{ borderRadius: "25px" }}
                  >
                    <MDBCardBody className="p-4">
                      <div className="d-flex justify-content-between pb-2">
                        <div>
                          <h2 className="display-2">
                            <strong>{props.kelvinToF(props.forecastData.list[0].main.temp)}° F</strong>
                            {/* <strong>{props.daysForecast["2023-11-07"][0].main.humidity}</strong> */}
                          </h2>
                          <p className="text-muted mb-0">{props.forecastData.city.name}</p>
                          <p className="text-muted mb-0">{props.locationData[0].state + ', ' + props.locationData[0].country}</p>
                          <small>{props.currentDateTime.toLocaleString()}</small>
                        </div>
                        <div>
                          <WeatherIcon 
                            weatherCondition={props.forecastData.list[0].weather[0].main}
                            size ={"7x"} 
                          />
                          {/* <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-weather/ilu3.webp"
                            width="150px"
                          /> */}
                        </div>
                      </div>
                    </MDBCardBody>
                  </MDBCard>


                  <MDBCard className="mb-4" style={{ borderRadius: "25px" }}>
                    <div className="d-flex justify-content-around">
                      {Object.keys(props.daysForecast).slice(0, 5).map((item) => (
                        <MDBCardBody className="p-4" key={item}>
                          <div className="d-flex justify-content-around text-center pb-3 pt-2">
                            <div className="flex-column">
                              <p className="small">
                                <strong>{props.kelvinToF(props.daysForecast[item][0].main.temp)}° F</strong>
                              </p>
                              <WeatherIcon weatherCondition={props.daysForecast[item][0].weather[0].main } size={"2x"} />
                              <p className="mb-0">
                                <strong>{props.changeDateFormat(item)}</strong><br/>
                                <strong>{props.convertDateToWeekday(item)}</strong>
                              </p>
                            </div>
                          </div>
                        </MDBCardBody>
                      ))}
                    </div>
                  </MDBCard>




                </MDBCol>
              </MDBRow>
            </MDBContainer>





        ) : (

            <MDBContainer className="h-70">
              {/* <MDBInputGroup className="mb-3">
                  <input
                      type="text"
                      id="location-name"
                      placeholder="Enter A City Name"
                      name="location"
                      className="rounded"
                      onChange={props.inputHandler}
                      value={props.getState}
                  />
                  
                  <button className="btn btn-primary mt-2" onClick={props.submitHandler}>
                      Search
                  </button>
              </MDBInputGroup> */}

              <MDBRow
                className="justify-content-center align-items-center h-100"
                style={{ color: "#282828" }}
              >
                <MDBCol md="9" lg="7" xl="5">
                  {/* <SearchBar
                    inputHandler = {props.inputHandler}
                    submitHandler={() => {
                      props.submitHandler();
                      handleShowAlert();
                    }}
                    getState = {props.getState}
                  />
                  {showAlert && <ErrorAlert/>} */}
                  {/* <MDBCard
                    className="mb-4 gradient-custom"
                    style={{ borderRadius: "25px" }}
                  >
                    <MDBCardBody className="p-4">
                      <div className="d-flex justify-content-between pb-2">
                        <div>
                          <h2 className="display-2">
                            <strong>0° F</strong>
                          </h2>
                          <p className="text-muted mb-0">Enter A City Name</p>
                        </div>
                        <div>
                          <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-weather/ilu3.webp"
                            width="150px"
                          />
                        </div>
                      </div>
                    </MDBCardBody>
                  </MDBCard> */}


                  {/* <MDBCard className="mb-4" style={{ borderRadius: "25px" }}>
                    <MDBCardBody className="p-4">
                      <div className="d-flex justify-content-around text-center pb-3 pt-2">
                        <div className="flex-column">
                          <p className="small">
                            <strong>21°C</strong>
                          </p>
                          <MDBIcon
                            fas
                            icon="sun"
                            size="2x"
                            className="mb-3"
                            style={{ color: "#ddd" }}
                          />
                          <p className="mb-0">
                            <strong>Mon</strong>
                          </p>
                        </div>
                        <div className="flex-column">
                          <p className="small">
                            <strong>20°C</strong>
                          </p>
                          <MDBIcon
                            fas
                            icon="sun"
                            size="2x"
                            className="mb-3"
                            style={{ color: "#ddd" }}
                          />
                          <p className="mb-0">
                            <strong>Tue</strong>
                          </p>
                        </div>
                        <div className="flex-column">
                          <p className="small">
                            <strong>16°C</strong>
                          </p>
                          <MDBIcon
                            fas
                            icon="cloud"
                            size="2x"
                            className="mb-3"
                            style={{ color: "#ddd" }}
                          />
                          <p className="mb-0">
                            <strong>Wed</strong>
                          </p>
                        </div>
                        <div className="flex-column">
                          <p className="small">
                            <strong>17°C</strong>
                          </p>
                          <MDBIcon
                            fas
                            icon="cloud"
                            size="2x"
                            className="mb-3"
                            style={{ color: "#ddd" }}
                          />
                          <p className="mb-0">
                            <strong>Thu</strong>
                          </p>
                        </div>
                        <div className="flex-column">
                          <p className="small">
                            <strong>18°C</strong>
                          </p>
                          <MDBIcon
                            fas
                            icon="cloud-showers-heavy"
                            size="2x"
                            className="mb-3"
                            style={{ color: "#ddd" }}
                          />
                          <p className="mb-0">
                            <strong>Fri</strong>
                          </p>
                        </div>
                      </div>
                    </MDBCardBody>
                  </MDBCard> */}
                </MDBCol>
              </MDBRow>
            </MDBContainer>



        )}
    </section>
  );
}
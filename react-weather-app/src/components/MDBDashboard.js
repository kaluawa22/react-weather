import React from "react";
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




export default function Card(props) {
  
  
  
  
    return (
    <section className="vh-100" style={{ backgroundColor: "#C1CFEA" }}>

        
        
        
        {props.forecastData.list ? (
            <MDBContainer className="h-100">
            <MDBInputGroup className="mb-3">
                <input
                type="text"
                id="location-name"
                placeholder="Location"
                name="location"
                className="rounded"
                onChange={props.inputHandler}
                value={props.getState}
                />
                
                <button className="btn btn-primary mt-2" onClick={props.submitHandler}>
                    Search
                </button>
            </MDBInputGroup>
    
            <MDBRow
              className="justify-content-center align-items-center h-100"
              style={{ color: "#282828" }}
            >
              <MDBCol md="9" lg="7" xl="5">
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
                        <small>{props.currentDateTime.toLocaleString()}</small>
                      </div>
                      <div>
                        <img
                          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-weather/ilu3.webp"
                          width="150px"
                        />
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
                              <strong>{props.kelvinToF(props.daysForecast[item][0].main.temp)} F</strong>
                            </p>
                            <MDBIcon
                              fas
                              // icon={props.daysForecast[item][0].weather[0].icon}
                              icon="sun"
                              size="2x"
                              className="mb-3"
                              style={{ color: "#ddd" }}
                            />
                            <p className="mb-0">
                              <strong>{item}</strong><br/>
                              <strong>{props.convertDate(item)}</strong>
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

            <MDBContainer className="h-100">
              <MDBInputGroup className="mb-3">
                  <input
                      type="text"
                      id="location-name"
                      placeholder="Location"
                      name="location"
                      className="rounded"
                      onChange={props.inputHandler}
                      value={props.getState}
                  />
                  
                  <button className="btn btn-primary mt-2" onClick={props.submitHandler}>
                      Search
                  </button>
              </MDBInputGroup>

              <MDBRow
                className="justify-content-center align-items-center h-100"
                style={{ color: "#282828" }}
              >
                <MDBCol md="9" lg="7" xl="5">
                  <MDBCard
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
                  </MDBCard>


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
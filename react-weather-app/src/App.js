import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import Dashboard from "./components/Dashboard";






function App() {
  // State

  const [apiData, setApiData] = useState({});
  const [getState, setGetState] = useState('');
  const [state, setState] = useState('');
  const [locationData, setLocationData] = useState({});

  // API KEY and URL where state holds location name
  const apiKey = process.env.REACT_APP_API_KEY;
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${state}&appid=${apiKey}`;
  const geoApiUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${state}&limit=1&appid=${apiKey}`;
  // https://api.openweathermap.org/data/2.5/weather?q=houston&appid=f1ea44311307a2d37ecf91f277cce87a
  // https://api.openweathermap.org/geo/1.0/direct?q=houston&limit=1&appid=f1ea44311307a2d37ecf91f277cce87a
  

  // function to get location

  const handleLocation = () =>{
    fetch(geoApiUrl)
      .then((res) => res.json())
      .then((data) => setLocationData(data));
  }


  // Side Effect to call API on app load

  useEffect( () => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => setApiData(data));
  }, [apiUrl]);

  // Handle Input

  const inputHandler = (event) => {
    setGetState(event.target.value);
   };

  const submitHandler = () => {
    setState(getState);
  };

// To convert Kelvin to F
  const kelvinToF = (k) =>{
    return ((k - 273.15) * (9/5) + 32).toFixed(0);
  }

// to get local Date

  const currentDate = new Date().toLocaleString;
  console.log(currentDate);

  const currentYear = () => {
    currentDate = new Date()
    return currentDate.getFullYear().toLocaleDateString;
  }


  return (
    <div className="App">
      <header className="d-flex justify-content-center align-items-center">
        <h2>React Weather App</h2>
      </header>
      {/* Weather Dashboard Component */}
      <Dashboard
        apiData = {apiData}
        getState = {getState}
        inputHandler ={inputHandler}
        submitHandler = {submitHandler}
        kelvinToF = {kelvinToF}
        currentDate = {currentDate}
        locationData = {locationData}
        
      />
      <div className="container">
        {/* <div className="mt-3 d-flex flex-column justify-content-center align-items-center">
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
              onChange={inputHandler}
              value={getState}
            />
          </div>
          <button className="btn btn-primary mt-2" onClick={submitHandler}>
            Search
          </button>
        </div> */}
  
        {/* <div className="card mt-3 mx-auto" style={{ width: '60vw' }}>
          {apiData.main ? (
            <div className="card-body text-center">
              <img
                src={`http://openweathermap.org/img/w/${apiData.weather[0].icon}.png`}
                alt="weather status icon"
                className="weather-icon"
              />
  
              <p className="h2">
                {kelvinToFarenheit(apiData.main.temp)}&deg; C
              </p>
  
              <p className="h5">
                <i className="fas fa-map-marker-alt"></i>{' '}
                <strong>{apiData.name}</strong>
              </p>
  
              <div className="row mt-4">
                <div className="col-md-6">
                  <p>
                    <i class="fas fa-temperature-low "></i>{' '}
                    <strong>
                      {kelvinToFarenheit(apiData.main.temp_min)}&deg; C
                    </strong>
                  </p>
                  <p>
                    <i className="fas fa-temperature-high"></i>{' '}
                    <strong>
                      {kelvinToFarenheit(apiData.main.temp_max)}&deg; C
                    </strong>
                  </p>
                </div>
                <div className="col-md-6">
                  <p>
                    {' '}
                    <strong>{apiData.weather[0].main}</strong>
                  </p>
                  <p>
                    <strong>
                      {' '}
                      {countries.getName(apiData.sys.country, 'en', {
                        select: 'official',
                      })}
                    </strong>
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <h1>Loading</h1>
          )}
        </div>*/}
      </div> 
      <footer className="footer">
        <code>
          Created by{' '}
          <a href="https://github.com/kaluawa22" target="none">
            Kalu
          </a>{' '}
          using React
        </code>
      </footer>
    </div>
  );
}

export default App;

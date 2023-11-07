import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import Dashboard from "./components/Dashboard";
import ForecastList from "./components/ForecastList";
import WeatherDash from './components/WeatherDash';
import MDBDashboard from "./components/MDBDashboard";
import { MDBListGroupItem } from 'mdb-react-ui-kit';




function App() {
  // State

  const [apiData, setApiData] = useState({});
  const [getState, setGetState] = useState('');
  const [state, setState] = useState('');
  // const [locationData, setLocationData] = useState({});
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [forecastData, setForecastData] = useState({});
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  const [items, setItems] = useState([]);
  const [daysForecast, setDaysForecast] = useState({});



  // API KEY and URL where state holds location name
  const apiKey = process.env.REACT_APP_API_KEY;
  const apiUrl = `https://nominatim.openstreetmap.org/search?format=json&q=${state}`;
  // const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${state}&appid=${apiKey}`;
  const geoApiUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${state}&limit=1&appid=${apiKey}`;
  // const forecastApi = `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;
  const forecastApi = `https://api.openweathermap.org/data/2.5/forecast?q=${state}&appid=${apiKey}`;
  
  // https://api.openweathermap.org/data/2.5/weather?q=houston&appid=f1ea44311307a2d37ecf91f277cce87a
  // https://api.openweathermap.org/geo/1.0/direct?q=houston&limit=1&appid=f1ea44311307a2d37ecf91f277cce87a
  

  // function to get location

  // const handleLocation = () =>{
  //   fetch(geoApiUrl)
  //     .then((res) => res.json())
  //     .then((data) => setLocationData(data));
  // }

// useEffect( () =>{
//   const getDate = setInterval(() => {
//     setCurrentDateTime(new Date());
//   });
// }, []);

  useEffect( () => {
    setCurrentDateTime(new Date());
  }, []);


  // useEffect( () =>{

  //   try {
  //     fetch(forecastApi)
  //     .then(res => res.json())
  //     .then(data => {
  //       const groupedData = data.list.reduce((days, row) => {
  //         const date = row.dt_txt.split(' ')[0];
  //         days[date] = [...(days[date] ? days[date]: []), row];
  //         return days;
  //       }, {});
        
  //       for(let date of Object.keys(groupedData)){
  //         console.log('Date:', date); 
  //         // current date -> date
  //         // original items array for this date -> groupedData[date]
  //         console.log('RowCount:', groupedData[date].length);
  //         console.log('MaxTemp:', getMax(groupedData[date], 'temp_max'));
  //         console.log('MinTemp:', getMin(groupedData[date], 'temp_min'));
  //         console.log('MaxHumidity:', getMax(groupedData[date], 'humidity'));
          
  //         console.log('\n\n');
  //       }
  //     });

  //   } catch(error){
  //     console.error('Error fetching Forecasat', error);
  //   }
    
    

  //   function getMax(arr, attr){
  //     return Math.max.apply(Math, arr.map(item => item.main[attr]));
  //   }

  //   function getMin(arr, attr){
  //     return Math.min.apply(Math, arr.map(item => item.main[attr]));
  //   }

  // }, [state]);



  useEffect( () => {

    const fetchForecastData = () =>{
      try{
        fetch(forecastApi)
        .then(res => res.json())
        .then(data => {
          const groupedData = data.list.reduce((days, row) => {
            const date = row.dt_txt.split(' ')[0];
            days[date] = [...(days[date] ? days[date]: []), row];
            return days;
          }, {});
          setDaysForecast(groupedData);
          console.log('Grouped Data:', groupedData);
          for(let date of Object.keys(groupedData)){
            console.log('Date:', date); 
            // current date -> date
            // original items array for this date -> groupedData[date]
            console.log('RowCount:', groupedData[date].length);
            console.log('MaxTemp:', getMax(groupedData[date], 'temp_max'));
            console.log('MinTemp:', getMin(groupedData[date], 'temp_min'));
            console.log('MaxHumidity:', getMax(groupedData[date], 'humidity'));
            
            console.log('\n\n');
          }
        });
      } catch(error){
        console.error('Error fetching Forecasat', error);
      }
    }
    function getMax(arr, attr){
      return Math.max.apply(Math, arr.map(item => item.main[attr]));
    }

    function getMin(arr, attr){
      return Math.min.apply(Math, arr.map(item => item.main[attr]));
    }
    if (state){
      fetchForecastData();
    }

  }, [state]);



  useEffect( () => {

    const fetchForecastData = () =>{
      try{
        console.log(forecastApi);
        fetch(forecastApi)
        .then((res) => res.json())
        // .then((res) => console.log(res.json()))
        // .then((data) => console.log(data))
        .then((data) => setForecastData(data));
        console.log(forecastData);
        
      } catch(error){
        console.error('Error fetching Forecasat', error);
      }
    }

    if (state){
      fetchForecastData();
    }

  }, [state]);





  // useEffect( () =>{
  //   // Function to fetch lon and lat
  //   const fetchCoordinates = async () => {
  //     try{
  //       const locationResponse = await fetch(geoApiUrl);
  //       const locationData = await locationResponse.json();
  //       if (locationData.length > 0) {
  //         const {lat, lon} = locationData[0];
  //         setLatitude(lat);
  //         setLongitude(lon);
  //       }
  //     } catch (error){
  //       console.error('Error fetching coordinates', error);
  //     }
  //   };

  //   // Function to fetch 7 day forcaste
  //   const fetchForecastData = async () =>{
  //     if (latitude && longitude){
  //       try{
  //         const forcastResponse = await fetch(forecastApi);
  //         const forecastData = await forcastResponse.json();
  //         setForecastData(forecastData);
  //         console.log(forecastData);
  //       } catch (error) {
  //         console.error('Error fetching forecast data:', error);
  //       }
  //     }
  //   };

  //   if (state){
  //     fetchCoordinates();
  //   }
    
  //   if(latitude && longitude){
  //     fetchForecastData();
  //   }


  // }, [state, latitude, longitude]);



  // Side Effect to call API on app load

  // useEffect( () => {
  //   fetch(apiUrl)
  //     .then((res) => res.json())
  //     .then((data) => setApiData(data));
  // }, [apiUrl]);

  // Handle Input
  const addItem = () => {
    if (getState.trim() !== '') {
      setItems([...items, getState]);
    }
  };

  const inputHandler = (event) => {
    setGetState(event.target.value);
   };
  
  const itemSubmitHandler = () =>{
    setState(items);
  };

  const submitHandler = () => {
    setState(getState);
    addItem();
    console.log(forecastApi);
    // fetch(geoApiUrl)
    //   .then((res) => res.json())
    //   .then((data) => setLocationData(data[0]));
      // .then((data) => console.log(JSON.stringify(data)));
    
  //   console.log(geoApiUrl);
  //   fetch(geoApiUrl)
  //     .then((res) => res.json())
  //     .then((data) => setLocationData(data[0]));
  //     // .then((data) => console.log(JSON.stringify(data)));
  //   console.log(locationData);
  };

// To convert Kelvin to F
  const kelvinToF = (k) =>{
    return ((k - 273.15) * (9/5) + 32).toFixed(0);
  };

// to get local Date

  // const currentDate = new Date().toLocaleString;
  // console.log(currentDate);

  // const currentYear = () => {
  //   currentDate = new Date()
  //   return currentDate.getFullYear().toLocaleDateString;
  // }

  // const formatDate = (inputDate) =>{
  //   console.log(inputDate);
  //   const date = new Date(inputDate);
  //   const formmatedDate = date.toLocaleDateString('en-US', {
  //     year: 'numeric',
  //     month: '2-digit',
  //     day: '2-digit',
  //   });
  //   console.log("formmated date", formmatedDate);
  //   return formmatedDate
  // }

  const convertDate = (myDate) =>{
    const parts = myDate.split('-');
    const formmatedDate = `${parts[1]}-${parts[2]}-${parts[0]}`;

    // console.log(dateString);
    const date = new Date(formmatedDate);
    const options = {weekday: 'long'};
    const weekday = date.toLocaleDateString('en-US', options);
    return weekday;

  }

  return (
    <div className="App">
      <header className="d-flex justify-content-center align-items-center">
      
        {/* <h2>{locationData.lat}</h2> */}
      </header>
      {/* Weather Dashboard Component */}
      {/* <Dashboard
        forecastData = {forecastData}
        // apiData = {apiData}
        getState = {getState}
        inputHandler ={inputHandler}
        submitHandler = {submitHandler}
        kelvinToF = {kelvinToF}
        // currentDate = {currentDate}
        // locationData = {locationData}
        
      /> */}
      <MDBDashboard 
        forecastData = {forecastData}
        inputHandler = {inputHandler}
        getState = {getState}
        submitHandler = {submitHandler}
        kelvinToF = {kelvinToF}
        currentDateTime = {currentDateTime}
        items = {items}
        itemSubmitHandler = {itemSubmitHandler}
        daysForecast = {daysForecast}
        convertDate = {convertDate}
      />
      <WeatherDash 
        forecastData = {forecastData}
        inputHandler = {inputHandler}
        getState = {getState}
        submitHandler = {submitHandler}
        kelvinToF = {kelvinToF}
        currentDateTime = {currentDateTime}
        items = {items}
        itemSubmitHandler = {itemSubmitHandler}
      
      />
      
      {/* {forecastData !== undefined ? (
        // Render your component when myState is not undefined
        <ForecastList 
          forecastData={forecastData} 
        />
      ) : (
        // Optionally, render a fallback component or message when myState is undefined
        <p>forecastData is undefined</p>
      )} */}

      
      <ForecastList
        forecastData = {forecastData}
        kelvinToF = {kelvinToF}
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
          Created by this{' '}
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

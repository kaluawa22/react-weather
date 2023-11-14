import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
// import Dashboard from "./components/Dashboard";
// import ForecastList from "./components/ForecastList";
// import WeatherDash from './components/WeatherDash';
import MDBDashboard from "./components/MDBDashboard";
// import SearchBar from './components/SearchBar';
import ErrorAlert from './components/ErrorAlert';
import { MDBListGroupItem } from 'mdb-react-ui-kit';
import {
  MDBInputGroup,
  MDBBtn,
} from 'mdb-react-ui-kit';



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
  const [errorStatus, setErrorStatus] = useState(false);


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
    const date = new Date();
    const options ={
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    };
    const formattedDate = date.toLocaleString(undefined, options);
    setCurrentDateTime(formattedDate);
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

  useEffect(() => {
    const fetchForecastData = () => {
      try {
        fetch(forecastApi)
          .then((res) => {
            if (!res.ok) {
              throw new Error(`Forecast API error: ${res.status} - ${res.statusText}`);
            }
            return res.json();
          })
          .then((data) => {
            if (data.cod === "404") {
              // Handle 404 error response
              console.error('City not found:', data.message);
              setErrorStatus(true);
             
              // You might want to set some state here to indicate the error to the user
            } else {
              const groupedData = data.list.reduce((days, row) => {
                const date = row.dt_txt.split(' ')[0];
                days[date] = [...(days[date] ? days[date] : []), row];
                return days;
              }, {});
              setDaysForecast(groupedData);
              console.log('Grouped Data:', groupedData);
              for (let date of Object.keys(groupedData)) {
                console.log('Date:', date);
                // current date -> date
                // original items array for this date -> groupedData[date]
                console.log('RowCount:', groupedData[date].length);
                console.log('MaxTemp:', getMax(groupedData[date], 'temp_max'));
                console.log('MinTemp:', getMin(groupedData[date], 'temp_min'));
                console.log('MaxHumidity:', getMax(groupedData[date], 'humidity'));
  
                console.log('\n\n');
              }
            }
          })
          .catch((error) => {
            console.error('Error fetching Forecast', error);
            // Handle other errors here
            // You might want to set some state to indicate the error to the user
          });
      } catch (error) {
        console.error('Error fetching Forecast', error);
        // Handle other errors here
        // You might want to set some state to indicate the error to the user
      }
    };
    function getMax(arr, attr){
      return Math.max.apply(Math, arr.map(item => item.main[attr]));
    }

    function getMin(arr, attr){
      return Math.min.apply(Math, arr.map(item => item.main[attr]));
    }
    if (state) {
      fetchForecastData();
    }
  }, [state]);
  

  // useEffect( () => {

  //   const fetchForecastData = () =>{
  //     try{
  //       fetch(forecastApi)
  //       .then(res => res.json())
  //       .then(data => {
  //         const groupedData = data.list.reduce((days, row) => {
  //           const date = row.dt_txt.split(' ')[0];
  //           days[date] = [...(days[date] ? days[date]: []), row];
  //           return days;
  //         }, {});
  //         setDaysForecast(groupedData);
  //         console.log('Grouped Data:', groupedData);
  //         // for(let date of Object.keys(groupedData)){
  //         //   console.log('Date:', date); 
  //         //   // current date -> date
  //         //   // original items array for this date -> groupedData[date]
  //         //   // console.log('RowCount:', groupedData[date].length);
  //         //   // console.log('MaxTemp:', getMax(groupedData[date], 'temp_max'));
  //         //   // console.log('MinTemp:', getMin(groupedData[date], 'temp_min'));
  //         //   // console.log('MaxHumidity:', getMax(groupedData[date], 'humidity'));
            
  //         //   // console.log('\n\n');
  //         // }
  //       });
  //     } catch(error){
  //       console.error('Error fetching Forecasat', error);
  //     }
  //   }
  //   function getMax(arr, attr){
  //     return Math.max.apply(Math, arr.map(item => item.main[attr]));
  //   }

  //   function getMin(arr, attr){
  //     return Math.min.apply(Math, arr.map(item => item.main[attr]));
  //   }
  //   if (state){
  //     fetchForecastData();
  //   }

  // }, [state]);



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
    // setErrorStatus(true);
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
  const resetErrorStatus = () => {
    // Reset errorStatus to false
    setErrorStatus(false);
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

  const convertDateToWeekday = (myDate) =>{
    const parts = myDate.split('-');
    const formmatedDate = `${parts[1]}-${parts[2]}-${parts[0]}`;

    // console.log(dateString);
    const date = new Date(formmatedDate);
    const options = {weekday: 'long'};
    const weekday = date.toLocaleDateString('en-US', options);
    return weekday;

  }
// function to convert dates from YYYY-MM-DD to MM-DD
  const changeDateFormat = (myDate) => {
    const parts = myDate.split('-');
    const formmatedDate = `${parts[1]}-${parts[2]}`;
    return formmatedDate;
  }

  return (
    <div className="App">
      <header className="d-flex justify-content-center align-items-center">Kalu Weather</header>
      {/* <SearchBar
        inputHandler = {inputHandler}
        submitHandler = {submitHandler}
        getState = {getState}
      /> */}
      {/* <div class="input-group mb-3">
        <MDBInputGroup className='mb-3'>
          <input 
            className='form-control' 
            placeholder="Recipient's username" 
            type='text' 
            id="location-name"
            onChange={inputHandler}
            value={getState}
          />
     
          <button className="btn btn-primary mt-2" onClick={submitHandler}>
              Search
          </button>
        </MDBInputGroup>
      </div> */}
      {/* <div class="input-group mb-3">
        <input 
          type="text" 
          class="form-control" 
          placeholder="Enter A City Name" 
          aria-label="City Name" 
          aria-describedby="basic-addon2"
          onChange={inputHandler}
          value={getState}
        />
        <div class="input-group-append">
          <button class="btn btn-outline-secondary" onClick={submitHandler} type="button">Button</button>
        </div>
      </div> */}
      {/* {errorStatus && <ErrorAlert />} */}
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
        convertDateToWeekday = {convertDateToWeekday}
        changeDateFormat = {changeDateFormat}
        errorStatus = {errorStatus}
        resetErrorStatus={resetErrorStatus}
      />
      {/* <WeatherDash 
        forecastData = {forecastData}
        inputHandler = {inputHandler}
        getState = {getState}
        submitHandler = {submitHandler}
        kelvinToF = {kelvinToF}
        currentDateTime = {currentDateTime}
        items = {items}
        itemSubmitHandler = {itemSubmitHandler}
      
      />
       */}
      <div className="container">
    
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

import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import MDBDashboard from "./components/MDBDashboard";
import { MDBListGroupItem } from 'mdb-react-ui-kit';
import SearchBar from './components/SearchBar';
import {
  MDBInputGroup,
  MDBBtn,
  MDBCol,
  MDBContainer,
  MDBRow,
} from 'mdb-react-ui-kit';




function App() {
  // State

  // const [apiData, setApiData] = useState({});
  const [getState, setGetState] = useState('');
  const [state, setState] = useState('');
  const [locationData, setLocationData] = useState({});
  // const [latitude, setLatitude] = useState('');
  // const [longitude, setLongitude] = useState('');
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
 
 
  // https://api.openweathermap.org/geo/1.0/direct?q=houston&appid=f1ea44311307a2d37ecf91f277cce87a
  // https://api.openweathermap.org/data/2.5/weather?q=houston&appid=f1ea44311307a2d37ecf91f277cce87a
  // https://api.openweathermap.org/geo/1.0/direct?q=houston&limit=1&appid=f1ea44311307a2d37ecf91f277cce87a
  


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

  
  useEffect(() => {
    const fetchForecastData = () => {
      try {
        fetch(forecastApi)
          .then((res) => {
            if (!res.ok) {
              setErrorStatus(true);
              
              throw new Error(`Forecast API error: ${res.status} - ${res.statusText}`);
              
            }
            console.log('Error Status:', errorStatus);
            return res.json();
          })
          .then((data) => {
        
              const groupedData = data.list.reduce((days, row) => {
                const date = row.dt_txt.split(' ')[0];
                days[date] = [...(days[date] ? days[date] : []), row];
                return days;
              }, {});
              setDaysForecast(groupedData);
              setErrorStatus(false);
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

    const fetchLocationData = () => {
      try {
        fetch(geoApiUrl)
        .then((res) => {
          if (!res.ok){
            // setErrorStatus(true);
            throw new Error(`Location API error: ${res.status} - ${res.statusText}`);
          }
          return res.json();
        })
        .then((data) => {
          // Process location data and set state
          setLocationData(data);
         
        })
        .catch((error) => {
          console.error('Error fetching Location', error);
          // setErrorStatus(true);
        });
      } catch (error) {
        console.error('Error fetching Location', error);
        // setErrorStatus(true);
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
      fetchLocationData();
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
  };
  const resetErrorStatus = () => {
    // Reset errorStatus to false
    setErrorStatus(false);
  };

// To convert Kelvin to F
  const kelvinToF = (k) =>{
    return ((k - 273.15) * (9/5) + 32).toFixed(0);
  };


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
    <section className="vh-100" style={{ }}>
        <MDBContainer className="h-70">
            <MDBRow
                className="justify-content-center align-items-center h-100"
                style={{ color: "#282828" }}
            >
              <MDBCol md="9" lg="7" xl="5">
                  <SearchBar 
                      inputHandler = {inputHandler}
                      submitHandler={submitHandler}
                      getState = {getState}
                      errorStatus = {errorStatus}
                  />
              </MDBCol>
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
                  locationData = {locationData}
                />
                <MDBCol md="9" lg="7" xl="5">
                  <footer className="footer">
                    <code>
                    Created by{' '}
                    <a href="https://github.com/kaluawa22" target="none">
                        Kalu
                    </a>{' '}
                    using React
                    </code>
                  </footer>
                </MDBCol>       
            </MDBRow>
        </MDBContainer>
    </section>
  );
}

export default App;

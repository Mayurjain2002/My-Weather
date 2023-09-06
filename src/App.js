import SearchField from "react-search-field";
import FeatherIcon from 'feather-icons-react';
import './App.css';
import { useEffect, useState } from "react";
import axios from "axios";

function App() {

  const [city,setcity] = useState('')
  const [temp,settemp] = useState('0')
  const [humid,sethumid] = useState('0')
  const [press,setpress] = useState('0')
  const [wind,setwind] = useState('0')
  const [search,setsearch] = useState('')

  useEffect(()=>{
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=d7cfa130e0fefa7b0ee58c3359cb4eb4`)
    .then((res) =>{
      setcity(res.data.name)
      settemp(res.data.main.temp)
      sethumid(res.data.main.humidity)
      setpress(res.data.main.pressure)
      setwind(res.data.wind.speed)

    })
  },[search])


  return (
   <div className="weather-box">
    <div className="weather-header">
      <h1>Weather App</h1>
    </div>
    <div className="search">
    <SearchField
      placeholder="Search..."
      onSearchClick = {(value)=>{
        setsearch(value)
      }}
      searchText={search}
      classNames="searches"
/>
    </div>
    <div className="city">
      <h1>{city}</h1>
    </div>

    <div className="row">
      <div className="coloumn">
      <FeatherIcon icon="sun" color="white"/>
       <p>Temp: {(temp-273.15).toFixed(2)} C</p>
      </div>
      <div className="coloumn">
        <FeatherIcon icon = "command" color="white" />
        <p>Presurre:{press} mb </p>
      </div>
    </div>
    <div className="row">
      <div className="coloumn">
      <FeatherIcon icon="cloud" color="white"/>
       <p>Humidity: {humid}%</p>
      </div>
      <div className="coloumn">
      <FeatherIcon icon="wind" color="white"/>
      <p>Wind: {wind}</p>
      </div>
    </div>


   </div>
  );
}

export default App;

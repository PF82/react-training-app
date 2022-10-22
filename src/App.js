import React, { useState } from 'react';
import moment from 'moment';
import './App.scss';

const api = {
  key: '9c61d7516f674d61ce67583b5f1d3f23',
  base: 'https://api.openweathermap.org/data/2.5/'
}

const App = () => {

  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const getWeatherData = (event) => {
    if (event.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&appid=${api.key}`)
        .then(response => response.json())
        .then(data => {
          setWeather(data);
          setQuery('');
          console.log(data)
        })
    }
  }

  const dateAndTime = (d) => {
    let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    let day = days[d.getDay()];
    let month = months[d.getMonth()];
    let year = d.getFullYear();
    let date = d.getDate();

    function addZero(i) {
      if (i < 10) { i = "0" + i }
      return i;
    }

    let hour = addZero(d.getHours());
    let min = addZero(d.getMinutes());
    let sec = addZero(d.getSeconds());
    return `${day} ${date} ${month} ${year} ${hour}:${min}`
  }

  return (
    <div className={(if (weather)) : 'app'}>
      <main>
        <div>
          <input
            type="text"
            className='search-bar'
            placeholder='Search location...'
            onChange={e => setQuery(e.target.value)}
            value={query}
            onKeyPress={getWeatherData}
          />
        </div>
        {(typeof weather.main != "undefined") ? (
          <div>
            <div className='location-box'>
              <div className='location'> {weather.name}, {weather.sys.country}</div>
              <div className='date'>{dateAndTime(new Date())}</div>
            </div>
            <div className='weather-box'>
              <div className='temp'>{Math.round(weather.main.temp)}°C</div>
              <div className='weather'>{weather.weather[0].main}</div>
            </div>
          </div>
        ) : ('')}
      </main>
    </div>
  );
}

export default App
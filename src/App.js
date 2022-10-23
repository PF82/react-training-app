import React, { useState } from 'react';
import moment from 'moment';
import './App.scss';
 
// import one from '../src/img/thunderstorm.jpg';
// import two from '../src/img/shower-rain.jpg';
// import three from '../src/img/rain.jpg';
// import four from '../src/img/snow.jpg';
// import five from '../src/img/fog.jpg';
// import six from '../src/img/clear-sky.jpg';
// import seven from '../src/img/few-clouds.jpg';
// import eight from '../src/img/scattered-clouds.jpg';
// import nine from '../src/img/broken-clouds.jpg';

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

  const DateAndTime = (d) => {
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
 
// // change background image to match current weather conditions
// const id = weather.weather[0].id;
// console.log(id)

// // using backgroundImage as opposed to img element (see notebook)
// let weatherImg = "";

// if (id >= 200 && id <= 232) {
//     weatherImg = one;
// } else if (id >= 300 && id <= 321 || id >= 520 && id <= 531) {
//     weatherImg = two;
// } else if (id >= 500 && id <= 504) {
//     weatherImg = three;
// } else if (id >= 600 && id <= 622 || id == 511) {
//     weatherImg = four;
// } else if (id >= 701 && id <= 781) {
//     weatherImg = five;
// } else if (id == 800) {
//     weatherImg = six;
// } else if (id == 801) {
//     weatherImg = seven;
// } else if (id == 802) {
//     weatherImg = eight;
// } else {
//     weatherImg = nine;
// }

// const BackgroundImage = () => {
//     return (
//         <div style={{
//             backgroundImage: `url(${weatherImg})`,
//             backgroundPosition: 'center',
//             backgroundSize: 'cover',
//             backgroundRepeat: 'no-repeat',
//             width: '100vw',
//             height: '100vh'
//         }}>
//         </div>
//     )
// }

  return (
    <div 
    className={(typeof weather.main != "undefined") ? ((weather.weather[0].id >= 801 && weather.weather[0].id <= 804) ? 'app clouds' : 'app') : 'app'}    
    >
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
            <div className='date'>{DateAndTime(new Date())}</div>
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
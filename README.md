# Notes

1. .env file not working properly; invalid api key message on dev tools 

https://github.com/mathews1193/weather-app/blob/master/weather-app/src/App.js

    <div className={(typeof weather.main != "undefined") ? ((weather.weather[0].id >= 500 && weather.weather[0].id <= 504) ? 'app rain' : 'app') : 'app'}>
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




     // function backgroundImage(id) {
  //   if (id >= 801 && id <= 804) {
  //    return "url('./img/scattered-clouds.jpg')";
  //     } else {
  //       return 
  //   }
  // }
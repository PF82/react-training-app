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


import React, { useState, useEffect } from 'react'

const CurrentWeather = () => {
    /* react useState hooks keep track of the application state in a function component; they accept an initial 
    state and return two values: the current state and a function that updates the state */
    /* destructure the returned values from useState; the first value, color, is our current state and the 
    second value, setColor, is the function that is used to update our state; these names are variables that can 
    be named anything */

    // EXAMPLE FROM W3SCHOOLS.COM:
    // Use a button to update the state:

    // import { useState } from "react";
    // import ReactDOM from "react-dom/client";

    // function FavoriteColor() {
    //   const [color, setColor] = useState("red");

    //   return (
    //     <>
    //       <h1>My favorite color is {color}!</h1>
    //       <button
    //         type="button"
    //         onClick={() => setColor("blue")}
    //       >Blue</button>
    //     </>
    //   )
    // }

    // const root = ReactDOM.createRoot(document.getElementById('root'));
    // root.render(<FavoriteColor />);

    // EXAMPLE FROM REACTJS.ORG:
    // Use a button to update the state:

    // import React, { useState } from 'react';

    // function Example() {
    //     // Declare a new state variable, which we'll call "count"
    //     const [count, setCount] = useState(0);

    //     return (
    //         <div>
    //             <p>You clicked {count} times</p>
    //             <button onClick={() => setCount(count + 1)}>
    //                 Click me
    //             </button>
    //         </div>
    //     );
    // }

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    // set the initial unit value to ‘metric’ to act as a default
    // const [unit, setUnit] = useState('metric');

    /* the useEffect hook allows to perform side effects in the components. some examples of side effects are: 
    fetching data, directly updating the DOM, and timers. useEffect accepts two arguments. The second argument 
    is optional; useEffect(<function>, <dependency>); the empty deps array [] means this useEffect will run 
    once/runs only on the first render */
    // https://www.w3schools.com/react/react_useeffect.asp
    useEffect(() => {
        fetch(`https://open-weather13.p.rapidapi.com/city/Porto`, {

            method: 'GET',
            headers: {
                'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
                'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
            }
        })
            .then(response => response.json())
            .then(response => console.log(response))
            .catch(err => console.error(err));
    }, [])

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <ul>
                {items.map(item => (
                    <li key={item.id}>
                        {item.name} {item.price}
                    </li>
                ))}
            </ul>
        );
    }
}

export default CurrentWeather



     // function backgroundImage(id) {
  //   if (id >= 801 && id <= 804) {
  //    return "url('./img/scattered-clouds.jpg')";
  //     } else {
  //       return 
  //   }
  // }


  
  const props = {
    conditionA: (weather.weather[0].id >= 500 && weather.weather[0].id <= 504),
    conditionB: (weather.weather[0].id >= 801 && weather.weather[0].id <= 804)
  };

  let value;

  switch (Object.keys(props)[0]) {
    case "conditionA":
      value = { img1 };
      break;
    case "conditionB":
      value = { img2 };
      break;
    default:
      value = { img3 };
  }

  console.log(value);
  console.log(id);

  import img1 from '../src/img/snow.jpg';
import img2 from '../src/img/rain.jpg';
import img3 from '../src/img/fog.jpg';
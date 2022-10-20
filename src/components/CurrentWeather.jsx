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

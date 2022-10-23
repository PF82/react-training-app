import React from 'react'

import one from '../img/thunderstorm.jpg';
import two from '../img/shower-rain.jpg';
import three from '../img/rain.jpg';
import four from '../img/snow.jpg';
import five from '../img/fog.jpg';
import six from '../img/clear-sky.jpg';
import seven from '../img/few-clouds.jpg';
import eight from '../img/scattered-clouds.jpg';
import nine from '../img/broken-clouds.jpg';

// change background image to match current weather conditions
const id = 300;
console.log(id)

// using backgroundImage as opposed to img element (see notebook)
let weatherImg = "";

if (id >= 200 && id <= 232) {
    weatherImg = one;
} else if (id >= 300 && id <= 321 || id >= 520 && id <= 531) {
    weatherImg = two;
} else if (id >= 500 && id <= 504) {
    weatherImg = three;
} else if (id >= 600 && id <= 622 || id == 511) {
    weatherImg = four;
} else if (id >= 701 && id <= 781) {
    weatherImg = five;
} else if (id == 800) {
    weatherImg = six;
} else if (id == 801) {
    weatherImg = seven;
} else if (id == 802) {
    weatherImg = eight;
} else {
    weatherImg = nine;
}

const BackgroundImage = () => {
    return (
        <div style={{
            backgroundImage: `url(${weatherImg})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            width: '100vw',
            height: '100vh'
        }}>
        </div>
    )
}

export default BackgroundImage






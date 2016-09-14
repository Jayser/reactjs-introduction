import './assets/scss/index.scss';

import React from 'react';
import ReactDOM, {render} from 'react-dom';

import WeatherApp from 'weather-app/index';

console.log(React);
console.log(ReactDOM);
debugger;

render(
    <WeatherApp />,
    document.getElementById('app')
);

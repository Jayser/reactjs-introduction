import './assets/scss/index.scss';

import React from 'react';
import {render} from 'react-dom';

import WeatherApp from 'WeatherApp/index';

render(
    <WeatherApp />,
    document.getElementById('app')
);

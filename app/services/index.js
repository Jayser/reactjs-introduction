import fetchJsonp from 'fetch-jsonp';
import axios from 'axios';
import {GEO_LOCATION_SERVICE_URL, WEATHER_SERVICE_URL} from '../constants/index.js';

export const GetWeather = (lat, lng, name, callback) => {
    const API_KEY = 'e6b2ec46c1a1424d28fd7606c38272c6';

    return fetchJsonp(`${WEATHER_SERVICE_URL}/${API_KEY}/${lat},${lng}`)
    .then((response) => {
        return response.json()
    })
    .then(data => callback(data, name))
    .catch((ex) => {
        console.log('fetch-jsonp error', ex);
    });
}

export const GetLocation = (targetVal, callback) => {
    axios
    .get(GEO_LOCATION_SERVICE_URL + targetVal)
    .then(data => callback(data));    
}
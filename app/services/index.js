import fetchJsonp from 'fetch-jsonp';
import axios from 'axios';
import {GEO_LOCATION_SERVICE_URL, WEATHER_SERVICE_URL, API_KEY} from '../constants/index.js';

export const GetWeather = (lat, lng, name, callback) => {
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
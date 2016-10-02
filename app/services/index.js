import fetchJsonp from 'fetch-jsonp';
import axios from 'axios';

export const GetWeather = (lat, lng, name, callback) => {
    const API_KEY = 'e6b2ec46c1a1424d28fd7606c38272c6';

    return fetchJsonp(`https://api.forecast.io/forecast/${API_KEY}/${lat},${lng}`)
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
    .get('https://maps.google.com/maps/api/geocode/json?sensor=false&address=' + targetVal)
    .then(data => callback(data));    
}
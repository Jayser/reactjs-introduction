import fetchJsonp from 'fetch-jsonp';
import axios from 'axios';

export const GetWeather = (lat, lng) => {
    const API_KEY = 'e6b2ec46c1a1424d28fd7606c38272c6';

    return fetchJsonp(`https://api.forecast.io/forecast/${API_KEY}/${lat},${lng}`)
    .then((response) => {
        return response.json()
    });
}

export const GetLocation = (target) => {
    if (!target.value) {
        return;
    }
    return axios.get('https://maps.google.com/maps/api/geocode/json?sensor=false&address=' + target.value);    
}
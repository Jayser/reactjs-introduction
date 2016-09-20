import {jsonp} from 'utils/index';

const URL = 'https://api.forecast.io/forecast';
const WEATHER_API = 'e6b2ec46c1a1424d28fd7606c38272c6';


const _handlerError = (error) => {
    console.log('request fail ', error);
};

export const fetch = (latitude, longitude) => {
    return jsonp(`${URL}/${WEATHER_API}/${ latitude },${ longitude }?units=si`)
};

export const fetchAll = (weathers) => {
    return Promise.all(weathers.map((weather) => {
        return fetch(weather.latitude, weather.longitude).then((newWeather) => {
            return {...newWeather, name: weather.name};
        });
    }))
};

export const getWeather = ({name, latitude, longitude}, callback) => {
    return fetch(latitude, longitude)
        .then((data) => callback({...data, name}))
        .catch(_handlerError);
};

export const getWeathers = (weathers, callback) => {
    return fetchAll(weathers)
        .then((data) => callback(data))
        .catch(_handlerError);
};

export default getWeather;

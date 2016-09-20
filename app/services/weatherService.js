import {jsonp} from 'utils/index';

const URL = 'https://api.forecast.io/forecast';
const WEATHER_API = 'e6b2ec46c1a1424d28fd7606c38272c6';

const MILLISECONDS = 1000;
const MINUTES = 60;

const _shouldUpdate = (timestamp) => {
    return Math.ceil((Date.now() - timestamp) / (MILLISECONDS * MINUTES)) > MINUTES;
};

const _parse = (weather) => {
    const {latitude, longitude, timestamp, name} = weather;
    const result = _shouldUpdate(timestamp) ? fetch(latitude, longitude) : Promise.resolve(weather);

    return result.then((newWeather) => {
        return {...newWeather, name, timestamp: Date.now()};
    });
};

const _handlerError = (error) => {
    console.log('request fail ', error);
};

export const fetch = (latitude, longitude) => {
    return jsonp(`${URL}/${WEATHER_API}/${ latitude },${ longitude }?units=si`)
};

export const fetchAll = (weathers) => {
    return Promise.all(weathers.map(_parse));
};

export const getWeather = ({name, latitude, longitude}, callback) => {
    return fetch(latitude, longitude)
        .then((data) => callback({...data, name, timestamp: Date.now()}))
        .catch(_handlerError);
};

export const getWeathers = (weathers, callback) => {
    return fetchAll(weathers)
        .then((data) => callback(data))
        .catch(_handlerError);
};

export default getWeather;

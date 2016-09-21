import {jsonp} from 'utils/index';
import {MILLISECONDS, MINUTES, WEATHER_SERVICE} from 'constants/index';

const _shouldUpdate = (timestamp) => {
    return Math.ceil((Date.now() - timestamp) / (MILLISECONDS * MINUTES)) > MINUTES;
};

const _parse = (weather) => {
    const {latitude, longitude, timestamp, name} = weather;
    const result = _shouldUpdate(timestamp) ? fetch(latitude, longitude) : Promise.resolve(weather);

    return result.then(newWeather => ({...newWeather, name, timestamp: Date.now()}) );
};

const _handlerError = (error) => {
    console.log('request fail ', error);
};

export const fetch = (latitude, longitude) => {
    return jsonp(`${WEATHER_SERVICE}/${ latitude },${ longitude }?units=si`)
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
        .then((data) => callback(data)).catch(_handlerError);
};

export default getWeather;

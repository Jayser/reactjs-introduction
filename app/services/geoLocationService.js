import axios from 'axios';

const URL = 'https://maps.google.com/maps/api/geocode/json?&address=';

const _handlerError = (error) => {
    console.log('request failed ', error);
};

export const fetch = (address) => {
    return axios(`${URL}${address}`);
};

export const fetchAll = (addresses) => {
    return axios.all(addresses.map((address) => {
        return fetch(address);
    }));
};

export const getLocation = (address, callback) => {
    return fetch(address)
        .then(callback)
        .catch(_handlerError);
};

export const getLocations = (addresses, callback) => {
    return fetchAll(addresses)
        .then(callback)
        .catch(_handlerError);
};

export default getLocation;

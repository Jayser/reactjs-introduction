import axios from 'axios';

export default (address, callback) => {
    return axios(`https://maps.google.com/maps/api/geocode/json?&address=${address}`)
        .then(callback)
        .catch(error => {
            console.log('request failed', error);
        });
}
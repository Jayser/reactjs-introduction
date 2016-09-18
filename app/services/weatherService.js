import jsonp from 'jsonp';

const WEATHER_API = 'e6b2ec46c1a1424d28fd7606c38272c6';

export default (data, callback) => {
  const {name, lng, lat} = data;
  return jsonp(`https://api.forecast.io/forecast/${WEATHER_API}/${ lat },${ lng }?units=si`, null, (err, data) => {
    if (err) {
      console.error(err.message);
    } else {
      callback({...data, name})
    }
  });
}

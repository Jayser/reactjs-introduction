import React, {Component} from 'react';

import WeatherAppView from 'components/WeatherApp';

class WeatherApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    };
  }

  handlerWeather(weather) {
    console.log('add weather', weather);
  }

  handlerLocation(locations) {
    this.setState({list: locations});
  }

  render() {
    return (
      <WeatherAppView
        {...this.props}
        state={this.state}
        handlerWeather={this.handlerWeather.bind(this)}
        handlerSearchLocation={this.handlerLocation.bind(this)}
      />
    );
  }
}

export default WeatherApp;

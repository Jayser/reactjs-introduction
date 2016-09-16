import React, {Component} from 'react';

import WeatherAppView from 'components/WeatherApp';

class WeatherApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    };
  }

  handlerLocation(locations) {
    this.setState({
      list: locations
    });
  }

  render() {
    return (<WeatherAppView {...this.props} handlerLocation={this.handlerLocation.bind(this)}/>);
  }
}

export default WeatherApp;

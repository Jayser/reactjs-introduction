import React, {Component} from 'react';

import WeatherAppView from 'components/WeatherApp';

class WeatherApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: '',
      list: []
    };
  }

  handlerSetState(type, list) {
    this.setState({
      type: type,
      list: list
    });
  }

  render() {
    return (
      <WeatherAppView
        {...this.props}
        state={this.state}
        handlerSetState={this.handlerSetState.bind(this)}
      />
    );
  }
}

export default WeatherApp;

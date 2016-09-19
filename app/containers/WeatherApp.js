import React, {Component} from 'react';
import store from 'store';

import WeatherAppView from 'components/WeatherApp';

const TYPE_WEATHER = 'WTR';

class WeatherApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: store.get('weatherList') ? TYPE_WEATHER : '',
      list: store.get('weatherList') || []
    };
  }

  handlerSetState(type, list) {
    let collection;

    if (TYPE_WEATHER === type) {
      collection = store.get('weatherList') || [];
      store.set('weatherList', collection.concat(list[0]));
      collection = store.get('weatherList') || [];
    }

    this.setState({
      type: type,
      list: collection || list
    });
  }

  handleClear() {
    store.clear();
    this.handlerSetState('', []);
  }

  render() {
    return (
      <WeatherAppView
        {...this.props}
        state={this.state}
        handleClear={this.handleClear.bind(this)}
        handlerSetState={this.handlerSetState.bind(this)}
      />
    );
  }
}

export default WeatherApp;

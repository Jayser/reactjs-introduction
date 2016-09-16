import React, {Component} from 'react';

import WeatherAppView from 'components/WeatherApp';

class WeatherApp extends Component {
    constructor(props){
        super(props);
        this.state = {
            cities: [],
            weatherList: []
        };
    }

    render() {
        return (<WeatherAppView {...this.props} state={this.state} />);
    }
}

export default WeatherApp;

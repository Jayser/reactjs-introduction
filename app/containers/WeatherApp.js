import React, {Component} from 'react';
import store from 'store';

import {getWeathers} from 'services/weatherService';
import WeatherAppView from 'components/WeatherApp';
import {LOCATION_TYPE, TYPE_WEATHER} from 'constants/index';

class WeatherApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            type: '',
            period: 1,
            list: store.get(TYPE_WEATHER) || []
        };
        this.hasWeathers = Boolean(this.state.list.length);
    }

    // pre-populate
    componentWillMount() {
        if (this.hasWeathers) {
            getWeathers(this.state.list, this.handlerWeathers.bind(this));
        }
    }

    handlerWeathers(weathers) {
        // save to storage for pre-populate
        store.set(TYPE_WEATHER, weathers);

        this.setState({
            ...this.state,
            type: TYPE_WEATHER,
            list: store.get(TYPE_WEATHER)
        });
    }

    handlerPeriod(period = [], idx = 0) {
        this.setState({
            ...this.state,
            period: Math.ceil(period[idx]) || 1
        });
    }

    handlerWeather(weather) {
        const collection = (store.get(TYPE_WEATHER) || []).concat(weather);

        // save to storage for pre-populate
        store.set(TYPE_WEATHER, collection);

        this.setState({
            ...this.state,
            type: TYPE_WEATHER,
            list: store.get(TYPE_WEATHER)
        });
    }

    handlerLocation(locations) {
        this.setState({
            ...this.state,
            type: LOCATION_TYPE,
            list: locations
        });
    }

    handlerClear() {
        store.clear();
        this.setState({
            type: '',
            period: 1,
            list: []
        });
    }

    render() {
        return (
            <WeatherAppView
                state={this.state}
                handleClear={this.handlerClear.bind(this)}
                handlerLocation={this.handlerLocation.bind(this)}
                handlerPeriod={this.handlerPeriod.bind(this)}
                handlerWeather={this.handlerWeather.bind(this)}
            />
        );
    }
}

export default WeatherApp;

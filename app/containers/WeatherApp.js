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
            list: store.get(TYPE_WEATHER) || []
        };
        this.hasWeathers = Boolean(this.state.list.length);
    }

    // pre-populate
    componentWillMount() {
        if (this.hasWeathers) {
            getWeathers(this.state.list, (weathers) => {
                this.setToState(TYPE_WEATHER, weathers);
            });
        }
    }

    setToState(type, list) {
        this.setState({
            type: type,
            list: list
        });
    }

    handlerWeather(weather) {
        const collection = (store.get(TYPE_WEATHER) || []).concat(weather);

        // save to storage for pre-populate
        store.set(TYPE_WEATHER, collection);

        this.setToState(TYPE_WEATHER, collection);
    }

    handlerLocation(locations) {
        this.setToState(LOCATION_TYPE, locations);
    }

    handlerClear() {
        store.clear();
        this.setToState('', []);
    }

    render() {
        return (
            <WeatherAppView
                state={this.state}
                handleClear={this.handlerClear.bind(this)}
                handlerLocation={this.handlerLocation.bind(this)}
                handlerWeather={this.handlerWeather.bind(this)}
            />
        );
    }
}

export default WeatherApp;

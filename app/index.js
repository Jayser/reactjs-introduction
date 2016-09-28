import './assets/scss/main.scss';

import React, {PropTypes} from 'react';
import {render} from 'react-dom';

import {GetLocation} from './components/actions/index.js'
import localStore from 'store'


import AutocompleteList from './components/autocomplete-list/index.js';
import WeatherList from './components/weather-list/index.js';

class WeatherApp extends React.Component{
    constructor (props) {
        super(props);
        this.state = {
            type: '',
            data: []
        };
        this.inputHandler = this.inputHandler.bind(this);
    }
    inputHandler ({ target }) {
        let locationPromise = GetLocation(target);

        if (!locationPromise) {
            this.setState({
                data: []
            });
            return;
        }
        locationPromise.then((response) => {
            this.setState({
                data: response.data.results
            })
        });
    }        
    render () {
        return(
            <div className="main-wrap">
                <input id="autocomplete-input" className="controls" onInput={this.inputHandler} type="text" placeholder="Enter a location"/>
                <AutocompleteList list={this.state.data} className="search-list"/>
                <WeatherList list={this.props.weatherItems} className="weather-list"/>
            </div>
        );
    }
}

WeatherApp.propTypes = {
    weatherItems: PropTypes.array.isRequired
}

render(<WeatherApp weatherItems={localStore.get('weatherItems') || []} />, document.getElementById('app'));

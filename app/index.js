import './assets/scss/main.scss';

import React from 'react';
import {render} from 'react-dom';

import {GetLocation} from './components/actions/index.js'
import localStore from 'store'


import AutocompleteList from './components/autocomplete-list/index.js';
import WeatherList from './components/weather-list/index.js';

class WeatherApp extends React.Component{
    constructor (props) {
        super(props);
        this.state = {
            type: this.checkType(),
            data: [],
            storedData: localStore.get('weatherItems') || []
        };
        this.inputHandler = this.inputHandler.bind(this);
        this.updateWeatherItems = this.updateWeatherItems.bind(this);
        this.setList = this.setList.bind(this);
        this.checkType = this.checkType.bind(this);
    }
    checkType () {
        return (localStore.get('weatherItems') || []).length ? 'Weather List' : 'Autocomplete List'
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
                data: response.data.results,
                type: 'Autocomplete List'
            })
        });
    }
    updateWeatherItems (data, listType) {
        this.setState({
            storedData: data,
            type: listType
        });
    }
    setList () {
        return (this.state.type === 'Autocomplete List' ?
            <AutocompleteList list={this.state.data} updateWeatherList={this.updateWeatherItems} className="search-list"/>:
            <WeatherList list={this.state.storedData} className="weather-list"/>);
    }
    render () {
        return(
            <div className="main-wrap">
                <input id="autocomplete-input" className="controls" onInput={this.inputHandler} type="text" placeholder="Enter a location"/>
                <p>{this.state.type}</p>
                {this.setList()}
            </div>
        );
    }
}

render(<WeatherApp/>, document.getElementById('app'));

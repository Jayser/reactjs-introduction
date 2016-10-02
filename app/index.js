import './assets/scss/main.scss';

import React from 'react';
import {render} from 'react-dom';

import {GetLocation} from './services/index.js'
import localStore from 'store'

import {WEATHER_LIST, AUTOCOMPLETE_LIST, STORE_NAME} from './constants/index';
import AutocompleteList from './components/autocomplete-list/index';
import WeatherList from './components/weather-list/index';
import ListTitle from './components/title-list/index';

class WeatherApp extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            type: '',
            data: [],
            storedData: localStore.get(STORE_NAME) || []
        };

        this.inputHandler = this.inputHandler.bind(this);
        this.updateWeatherItems = this.updateWeatherItems.bind(this);
        this.getList = this.getList.bind(this);
        this.setResponceToState = this.setResponceToState.bind(this);
    }
    componentWillMount () {
        if (this.state.storedData.length) {
            this.setState({
                type: WEATHER_LIST
            });
        }
    }
    setResponceToState (response) {
        this.setState({
            data: response.data.results,
            type: AUTOCOMPLETE_LIST
        })
    }
    inputHandler ({ target }) {
        if (!target.value) {
            this.setState({
                data: [],
                type: WEATHER_LIST
            });
            return;
        }

        GetLocation(target.value, this.setResponceToState)
    }
    updateWeatherItems (data, listType) {
        this.setState({
            storedData: data,
            type: listType
        });
    }
    getList () {
        let list = '';

        if (this.state.type === AUTOCOMPLETE_LIST) {
            list = <AutocompleteList list={this.state.data} updateWeatherList={this.updateWeatherItems} className="search-list"/>
        } else if (this.state.type === WEATHER_LIST) {
            list = <WeatherList list={this.state.storedData} className="weather-list"/> 
        }

        return list;
    }
    render () {
        return(
            <div className="main-wrap">
                <input id="autocomplete-input" className="controls" onInput={this.inputHandler} type="text" placeholder="Enter a location"/>
                <ListTitle>
                    {this.state.type}
                </ListTitle>
                {this.getList()}
            </div>
        );
    }
}

render(<WeatherApp/>, document.getElementById('app'));
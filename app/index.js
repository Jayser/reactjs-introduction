import './assets/scss/main.scss';

import React from 'react';
import {render} from 'react-dom';

import {GetLocation} from './components/actions/index.js'
import localStore from 'store'


import AutocompleteList from './components/autocomplete-list/index.js';
import WeatherList from './components/weather-list/index.js';
import ListTitle from './components/title-list/index.js';

class WeatherApp extends React.Component{
    constructor (props) {
        super(props);
        this.state = {
            type: '',
            data: [],
            storedData: localStore.get('weatherItems') || []
        };
        this.inputHandler = this.inputHandler.bind(this);
        this.updateWeatherItems = this.updateWeatherItems.bind(this);
        this.setList = this.setList.bind(this);
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
    getList () {
        let list = '';

        if (this.state.type === 'Autocomplete List') {
            list = <AutocompleteList list={this.state.data} updateWeatherList={this.updateWeatherItems} className="search-list"/>
        } else if (this.state.type === 'Wheather List') {
            list = <WeatherList list={this.state.storedData} className="weather-list"/> 
        }

        return list;
    }
    render () {
        return(
            <div className="main-wrap">
                <input id="autocomplete-input" className="controls" onInput={this.inputHandler} type="text" placeholder="Enter a location"/>
                <ListTitle savedData={this.state.storedData}/>
                {this.getList()}
            </div>
        );
    }
}

render(<WeatherApp/>, document.getElementById('app'));

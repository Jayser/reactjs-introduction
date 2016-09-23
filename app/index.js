import './assets/scss/main.scss';

import React from 'react';
import {render} from 'react-dom';
import axios from 'axios';

import AutocompleteList from './components/autocomplete-list/index.js';

class WeatherApp extends React.Component{
    constructor (props) {
        super(props);
        this.state= {
            type: '',
            data: []
        };
        this.inputHandler = this.inputHandler.bind(this);
    }
    inputHandler ({ target }) {
        if (!target.value) {
            this.setState({
                data: []
            });
            return;
        }
        axios.get('https://maps.google.com/maps/api/geocode/json?sensor=false&address=' + target.value)
        .then((response) => {
            this.setState({
                data: response.data.results
            })
        })
    }
    render () {
        return(
            <div className="main-wrap">
                <input id="autocomplete-input" className="controls" onInput={this.inputHandler} type="text" placeholder="Enter a location"/>
                <AutocompleteList list={this.state.data} className="search-list"/>
            </div>
        );
    }
}

render(<WeatherApp />, document.getElementById('app'));

import './index.scss';

import React, {createClass, PropTypes} from 'react';

import {Logo, Button, Slider} from 'components/common';

import SearchLocation from 'containers/SearchLocation';
import LocationsList from 'containers/LocationsList';
import WeathersList from 'containers/WeathersList';

import {LOCATION_TYPE, MIN_PERIOD, MAX_PERIOD} from 'constants/index';
import {lifeCycle} from 'utils/index';

const WeatherApp = createClass({
    mixins: [lifeCycle],

    propTypes: {
        className: PropTypes.string,
        state: PropTypes.object.isRequired,
        handlerLocation: PropTypes.func.isRequired,
        handlerWeather: PropTypes.func.isRequired,
        handlerPeriod: PropTypes.func.isRequired,
        handleClear: PropTypes.func.isRequired
    },

    getDefaultProps: function() {
        return { className: 'weather-app' }
    },

    renderLocationList: function() {
        return <LocationsList state={this.props.state} handlerWeather={this.props.handlerWeather}/>;
    },

    renderWeathersList: function() {
        return <WeathersList state={this.props.state}/>;
    },

    getContent: function() {
        const {state} = this.props;
        let content = null;

        if (state.list.length) {
            content = (state.type === LOCATION_TYPE) ? this.renderLocationList() : this.renderWeathersList();
        } else {
            content = <div>No Results</div>;
        }

        return (content);
    },

    handlerUpdatePeriod: function(period = [], idx = 0) {
        if (this.refs['periodStatus'] ){
            this.refs['periodStatus'].innerHTML = Math.ceil(period[idx]);
        }
    },

    render: function() {
        const {handlerLocation, handlerPeriod, className, handleClear, state} = this.props;
        return (
            <div className={`${className}`}>
                <header className={`${className}__header`}>
                    <div className={`${className}__logo`}>
                        <Logo />
                    </div>
                    <div className={`${className}__search`}>
                        <SearchLocation handlerLocation={handlerLocation}/>
                    </div>
                    <div className={`${className}__actions`}>
                        <div className={`${className}__actions-add`}>
                            <Button>
                                <i className="fa fa-plus">{''}</i>
                            </Button>
                        </div>
                        <div className={`${className}__actions-clear`}>
                            <Button onClick={handleClear}>
                                <i className="fa fa-trash-o">{''}</i>
                            </Button>
                        </div>
                    </div>
                </header>
                <div className={`${className}__content`}>
                    {this.getContent()}
                </div>
                <footer className={`${className}__footer`}>
                    <Slider
                        ref="slider"
                        range={{min: MIN_PERIOD, max: MAX_PERIOD}}
                        start={[state.period]}
                        onChange={handlerPeriod}
                        onUpdate={this.handlerUpdatePeriod}
                    />
                    <div ref="periodStatus">{state.period}</div>
                </footer>
            </div>
        )
    }
});

export default WeatherApp;

import React, {Component, PropTypes} from 'react';
import Skycons from 'skycons';
import classNames from 'classnames';

import {random} from 'utils/index';

import WeatherItem from 'components/WeatherItem';
import WeatherPeriodItem from 'components/WeatherPeriodItem';
import {MIN_PERIOD, ICON_COLOR} from 'constants/index';

class WeatherList extends Component {
    componentWillMount() {
        Skycons(window);
        this.skyCons = new (Skycons(window))({"color": ICON_COLOR});
    }

    handlerSkyCons(action) {
        this.props.state.list.forEach(({daily = {}}) => {
            const weathers = daily.data || [];
            weathers.forEach(weather => {
                const iconName = `${weather.icon}-${weather.time}`;
                this.skyCons[action](iconName, weather.icon);
            });
        });
        this.skyCons.play();
    }

    componentDidMount() {
        this.handlerSkyCons('add');
    }

    componentDidUpdate() {
        this.handlerSkyCons('add');
    }

    componentWillUnmount() {
        this.handlerSkyCons('remove');
    }

    handlerWeatherPeriod(el) {
        if(el) {
            el.style.height = `${el.offsetHeight}px`;
        }
    }

    renderForPeriod({daily = {}}) {
        const weatherOnWeek = (daily.data && daily.data) || [];
        const {state} = this.props;
        const perDays = state.period + MIN_PERIOD;
        
        if (state.period <= MIN_PERIOD) { return; }

        return (
            <div ref={this.handlerWeatherPeriod.bind(this)} className={classNames(`weather-period`)}>
                {weatherOnWeek.slice(MIN_PERIOD, perDays).map(period => (
                    <WeatherPeriodItem key={random()} period={period} />
                ))}
            </div>
        )
    }

    renderContent(weather) {
        return (
            <div key={random()} className={classNames(`${this.props.defaultClassName}__wrapper`)}>
                <WeatherItem weather={weather} handlerRemove={this.props.handlerRemove} />
                {this.renderForPeriod(weather)}
            </div>
        );
    }

    render() {
        const {state, defaultClassName, className} = this.props;
        return (
            <div className={classNames(defaultClassName, className)}>
                {state.list.map(this.renderContent.bind(this))}
            </div>
        );
    }
}

WeatherList.propTypes = {
    state: PropTypes.object.isRequired,
    className: PropTypes.string,
    defaultClassName: PropTypes.string,
    handlerRemove: PropTypes.func.isRequired
};

WeatherList.defaultProps = {
    defaultClassName: 'weather-list'
};

export default WeatherList;

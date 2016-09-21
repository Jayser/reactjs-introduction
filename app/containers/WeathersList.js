import React, {Component, PropTypes} from 'react';
import Skycons from 'skycons';

import WeatherItem from 'components/WeatherItem';
import {FIRST, ICON_COLOR} from 'constants/index';

class WeatherList extends Component {
    componentDidMount() {
        Skycons(window);
        const skyCons = new (Skycons(window))({"color": ICON_COLOR});

        this.props.state.list.forEach(({ timestamp, daily = {}}) => {
            const currently = daily.data && daily.data[FIRST] || {};
            const iconName = `${currently.icon}-${timestamp}`;
            skyCons.add(iconName, currently.icon);
        });
        skyCons.play();
    }

    render() {
        return (
            <div>
                {this.props.state.list.map((weather, idx) => {
                    return (<WeatherItem key={idx} state={this.props.state} weather={weather} />)
                })}
            </div>
        );
    }
}

WeatherList.propTypes = {
    state: PropTypes.object.isRequired
};

export default WeatherList;

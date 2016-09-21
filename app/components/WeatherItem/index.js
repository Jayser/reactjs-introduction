import './index.scss';

import React, {PropTypes} from 'react';
import classNames from 'classnames';

import {FIRST} from 'constants/index';

const LocationItem = ({state = {}, defaultClassName, className}) => {
    const currentlyWeather = state.daily && state.daily.data && state.daily.data[FIRST] || {};
    const temperature = `
        ${~~currentlyWeather.temperatureMin}°C
        -
        ${~~currentlyWeather.temperatureMax}°C
    `;
    return (
        <div className={classNames(defaultClassName, className)}>
            <div className={classNames(`${defaultClassName}-icon`)}>
                <canvas id={`${currentlyWeather.icon}-${state.timestamp}`} width="40" height="40"></canvas>
                <div className={classNames(`${defaultClassName}-temperature`)}>
                    {temperature}
                </div>
            </div>
            <div className={classNames(`${defaultClassName}-info`)}>
                <div className={classNames(`${defaultClassName}-location`)}>{state.name}</div>
                <div className={classNames(`${defaultClassName}-summary`)}>{currentlyWeather.summary}</div>
            </div>
        </div>
    )
};


LocationItem.propTypes = {
    state: PropTypes.object.isRequired,
    defaultClassName: PropTypes.string,
    className: PropTypes.string
};

LocationItem.defaultProps = {
    defaultClassName: 'weather__item'
};

export default LocationItem;

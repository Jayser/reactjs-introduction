import './index.scss';

import React, {PropTypes} from 'react';
import classNames from 'classnames';

import {FIRST_ELEMENT} from 'constants/index';
import {closest} from 'utils/index';

const Toggle = (e) => {
    const hideClass = 'weather-period__hide';
    const target = closest(e.target, '.weather__item').nextSibling;
    if (target) {
        target.classList.toggle(hideClass);
    }
};

const LocationItem = ({weather = {}, handlerRemove, defaultClassName, className}) => {
    const currentlyWeather = weather.daily && weather.daily.data && weather.daily.data[FIRST_ELEMENT] || {};
    const temperature = `
        ${~~currentlyWeather.temperatureMin} °C
        -
        ${~~currentlyWeather.temperatureMax} °C
    `;
    return (
        <div className={classNames(defaultClassName, className)} onClick={Toggle}>
            <div className={classNames(`${defaultClassName}-icon`)}>
                <canvas id={`${currentlyWeather.icon}-${currentlyWeather.time}`} width="60" height="60"></canvas>
            </div>
            <div className={classNames(`${defaultClassName}-info`)}>
                <div className={classNames(`${defaultClassName}-location`)}>{weather.name}</div>
                <div className={classNames(`${defaultClassName}-summary`)}>{currentlyWeather.summary}</div>
                <div className={classNames(`${defaultClassName}-temperature`)}>{temperature}</div>
            </div>
            <i className={classNames(`${defaultClassName}-remove`)} onClick={() => handlerRemove(currentlyWeather.time)}>X</i>
        </div>
    )
};


LocationItem.propTypes = {
    weather: PropTypes.object.isRequired,
    handlerRemove: PropTypes.func.isRequired,
    defaultClassName: PropTypes.string,
    className: PropTypes.string
};

LocationItem.defaultProps = {
    defaultClassName: 'weather__item'
};

export default LocationItem;

import './WeatherPeriodItem.scss';

import React, {createClass, PropTypes} from 'react';
import classNames from 'classnames';

const LocationItem = createClass({
    propTypes: {
        period: PropTypes.object.isRequired,
        defaultClassName: PropTypes.string,
        className: PropTypes.string
    },

    getDefaultProps: function () {
        return {defaultClassName: 'weather-period'}
    },

    render: function() {
        const {period = {}, defaultClassName, className} = this.props;

        const temperature = `
            ${~~period.temperatureMin} °C
            -
            ${~~period.temperatureMax} °C
        `;

        return (
            <div ref="weather-period" className={classNames(`${defaultClassName}__wrapper`, className)}>
                <div className={classNames(`${defaultClassName}__icon`)}>
                    <canvas id={`${period.icon}-${period.time}`} width="20" height="20"></canvas>
                </div>
                <div className={classNames(`${defaultClassName}__temperature`)}>
                    {temperature}
                </div>
                <div className={classNames(`${defaultClassName}__summary`)}>{period.summary}</div>
            </div>
        )
    }
});

export default LocationItem;

import React, {Component, PropTypes} from 'react';

import LocationItem from 'components/LocationItem';
import weatherService from 'services/weatherService';

class LocationList extends Component {
    handlerWeather({target}) {
        weatherService(target.dataset, (weather) => {
            this.props.handlerWeather(weather);
        });
    }

    render() {
        return (
            <ul className="location-list">
                {
                    this.props.state.list.map((item, idx) => {
                        return (<LocationItem key={idx} handlerWeather={this.handlerWeather.bind(this)} {...item} />)
                    })
                }
            </ul>
        );
    }
}

LocationList.propTypes = {
    state: PropTypes.object.isRequired,
    handlerWeather: PropTypes.func.isRequired
};

export default LocationList;

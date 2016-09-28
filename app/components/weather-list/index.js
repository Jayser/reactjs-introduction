import React, {PropTypes} from 'react';

class WeatherList extends React.Component {
    render () {
        return (<ul className="weather-list">
        {
            this.props.list.map((item, idx) => {
                return (<li key={idx} className="list-item-wrap">
                    <span>{item.name}</span>
                    <span>{item.temperature}</span>
                </li>)
            })
        }
        </ul>);
    }
}

WeatherList.propTypes = {
    list: PropTypes.array.isRequired
}

export default WeatherList;
import React, {Component, PropTypes} from 'react';
import Skycons from 'skycons';

import WeatherItem from 'components/WeatherItem';

class WeatherList extends Component {
  formatIconName(name = '') {
    return name.toUpperCase().replace(/\-/g, '_');
  }

  componentDidMount() {
    const SkyCons = Skycons(window);
    const skyCons = new (Skycons(window))({"color": "#c2c5ca"});

    this.props.state.list.forEach(({ currently }) => {
      const iconName = `${currently.icon}-${currently.time}`;
      const iconType = SkyCons[this.formatIconName(currently.icon)];
      skyCons.add(iconName, iconType);
    });
    skyCons.play();
  }

  render() {
    return (
      <div>
        {this.props.state.list.map((item, idx) => {
          const {currently, name} = item;
          return (<WeatherItem key={idx} state={{...currently, name}} />)
        })}
      </div>
    );
  }
}

WeatherList.propTypes = {
  state: PropTypes.object.isRequired
};

export default WeatherList;

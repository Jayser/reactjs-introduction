import React, {Component, PropTypes} from 'react';

import LocationItem from 'components/LocationItem';
import weatherService from 'services/weatherService';

const LIST_TYPE = 'WTR';

class LocationList extends Component {
  handlerWeather({ target }) {
    weatherService(target.dataset, (data) => {
      this.props.handlerSetState(LIST_TYPE, [data]);
    });
  }

  render() {
    return (
      <div>
        {this.props.state.list.map((item, idx) => {
          return (<LocationItem key={idx} handlerWeather={this.handlerWeather.bind(this)} {...item} />)
        })}
      </div>
    );
  }
}

LocationList.propTypes = {
  state: PropTypes.object.isRequired,
  handlerSetState: PropTypes.func.isRequired
};

export default LocationList;

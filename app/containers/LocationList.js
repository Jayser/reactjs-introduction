import React, {Component, PropTypes} from 'react';

import LocationItem from 'components/LocationItem';

class LocationList extends Component {
  render() {
    const {state, handlerWeather} = this.props;

    return (
      <div>
        {state.list.map((item, idx) => {
          return (<LocationItem key={idx} handlerWeather={handlerWeather} {...item} />)
        })}
      </div>
    );
  }
}

LocationList.propTypes = {
  state: PropTypes.object.isRequired,
  handlerWeather: PropTypes.func.isRequired
};

export default LocationList;

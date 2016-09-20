import './index.scss';

import React, {PropTypes} from 'react';
import classNames from 'classnames';

const LocationItem = (props) => (
  <li className={classNames(props.defaultClassName, props.className)}
       data-name={props.formatted_address}
       data-longitude={props.geometry.location.lng}
       data-latitude={props.geometry.location.lat}
       onClick={props.handlerWeather}>
    {props.formatted_address}
  </li>
);


LocationItem.propTypes = {
  formatted_address: PropTypes.string.isRequired,
  geometry: PropTypes.object.isRequired,
  defaultClassName: PropTypes.string,
  className: PropTypes.string,
  handlerWeather: PropTypes.func.isRequired
};

LocationItem.defaultProps = {
  defaultClassName: 'location__item'
};

export default LocationItem;

import React, {PropTypes} from 'react';
import classNames from 'classnames';

const LocationItem = (props) => (
  <div className={classNames(props.defaultClassName, props.className)}
       data-name={props.formatted_address}
       data-lng={props.geometry.location.lng}
       data-lat={props.geometry.location.lat}
       onClick={props.handlerWeather}>
    {props.formatted_address}
  </div>
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

import './index.scss';

import React, {PropTypes} from 'react';
import classNames from 'classnames';

const LocationItem = ({state, defaultClassName, className}) => (
  <div className={classNames(defaultClassName, className)}>
    <div className={classNames(`${defaultClassName}-icon`)}>
      <canvas id={`${state.icon}-${state.time}`} width="40" height="40"></canvas>
    </div>
    <div className={classNames(`${defaultClassName}-temperature`)}>{state.temperature}&deg;</div>
    <div className={classNames(`${defaultClassName}-info`)}>
      <div className={classNames(`${defaultClassName}-location`)}>{state.name}</div>
      <div className={classNames(`${defaultClassName}-summary`)}>{state.summary}</div>
    </div>
  </div>
);


LocationItem.propTypes = {
  state: PropTypes.object.isRequired,
  defaultClassName: PropTypes.string,
  className: PropTypes.string
};

LocationItem.defaultProps = {
  defaultClassName: 'weather__item'
};

export default LocationItem;

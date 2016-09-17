import './index.scss';

import React, {PropTypes} from 'react';

import {Logo} from 'components/common';
import {Button} from 'components/form';
import SearchLocation from 'containers/SearchLocation';
import LocationList from 'containers/LocationList';

const WeatherApp = (props) => {
  let content = <div>No Results</div>;
  if (props.state.list.length) {
    content = <LocationList state={props.state} handlerWeather={props.handlerWeather}/>;
  }
  return (
    <div className={`${props.className}`}>
      <header className={`${props.className}__header`}>
        <div className={`${props.className}__logo`}>
          <Logo />
        </div>
        <div className={`${props.className}__search`}>
          <SearchLocation handlerSearchLocation={props.handlerSearchLocation}/>
        </div>
        <div className={`${props.className}__actions`}>
          <div className={`${props.className}__actions-add`}>
            <Button>
              <i className="fa fa-plus">{''}</i>
            </Button>
          </div>
          <div className={`${props.className}__actions-clear`}>
            <Button>
              <i className="fa fa-trash-o">{''}</i>
            </Button>
          </div>
        </div>
      </header>
      <div className={`${props.className}__content`}>
        {content}
      </div>
      <footer className={`${props.className}__footer`}>{''}</footer>
    </div>
  )
};

WeatherApp.propTypes = {
  className: PropTypes.string,
  state: PropTypes.object.isRequired,
  handlerSearchLocation: PropTypes.func.isRequired,
  handlerWeather: PropTypes.func.isRequired
};

WeatherApp.defaultProps = {
  className: 'weather-app'
};

export default WeatherApp;

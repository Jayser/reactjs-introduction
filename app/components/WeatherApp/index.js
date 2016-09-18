import './index.scss';

import React, {PropTypes} from 'react';

import {Logo} from 'components/common';
import {Button} from 'components/form';
import SearchLocation from 'containers/SearchLocation';
import LocationList from 'containers/LocationList';
import WeatherList from 'containers/WeatherList';

const TYPE_LOCATION = 'LCS';
const TYPE_WEATHER = 'WTR';

const WeatherApp = ({state, handlerSetState, className}) => {
  let content = <div>No Results</div>;
  if (state.type === TYPE_LOCATION && state.list.length) {
    content = <LocationList state={state} handlerSetState={handlerSetState}/>;
  } else if (state.type === TYPE_WEATHER && state.list.length) {
    content = <WeatherList state={state} />;
  }
  return (
    <div className={`${className}`}>
      <header className={`${className}__header`}>
        <div className={`${className}__logo`}>
          <Logo />
        </div>
        <div className={`${className}__search`}>
          <SearchLocation handlerSetState={handlerSetState}/>
        </div>
        <div className={`${className}__actions`}>
          <div className={`${className}__actions-add`}>
            <Button>
              <i className="fa fa-plus">{''}</i>
            </Button>
          </div>
          <div className={`${className}__actions-clear`}>
            <Button>
              <i className="fa fa-trash-o">{''}</i>
            </Button>
          </div>
        </div>
      </header>
      <div className={`${className}__content`}>
        {content}
      </div>
      <footer className={`${className}__footer`}>{''}</footer>
    </div>
  )
};

WeatherApp.propTypes = {
  className: PropTypes.string,
  state: PropTypes.object.isRequired,
  handlerSetState: PropTypes.func.isRequired
};

WeatherApp.defaultProps = {
  className: 'weather-app'
};

export default WeatherApp;

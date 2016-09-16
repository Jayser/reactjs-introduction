import './index.scss';

import React from 'react';

import {Logo} from 'components/common';
import {Button} from 'components/form';
import SearchLocation from 'containers/SearchLocation';

const WeatherApp = (props) => (
    <div className={`${props.className}`}>
        <header className={`${props.className}__header`}>
            <div className={`${props.className}__logo`}>
                <Logo />
            </div>
            <div className={`${props.className}__search`}>
                <SearchLocation id="google-place-auto-complete" type="text" placeholder="Enter a location" />
            </div>
            <div className={`${props.className}__actions`}>
                <div className={`${props.className}__actions-add`}>
                    <Button>
                        <i className="fa fa-plus">&nbsp;</i>
                    </Button>
                </div>
                <div className={`${props.className}__actions-clear`}>
                    <Button>
                        <i className="fa fa-trash-o">&nbsp;</i>
                    </Button>
                </div>
            </div>
        </header>
        <div className={`${props.className}__content`}></div>
        <footer className={`${props.className}__footer`}>&nbsp;</footer>
    </div>
);

WeatherApp.propTypes = {
    className: React.PropTypes.string
};

WeatherApp.defaultProps = {
    className: 'weather-app'
};

export default WeatherApp;

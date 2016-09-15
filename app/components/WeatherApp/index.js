import './index.scss';

import React from 'react';

import Logo from 'common/Logo';
import Input from 'form/Input';
import Button from 'form/Button';

const WeaterApp = (props) => (
    <div className={`${props.className}`}>
        <header className={`${props.className}__header`}>
            <div className={`${props.className}__logo`}>
                <Logo />
            </div>
            <div className={`${props.className}__search`}>
                <Input id="google-place-auto-complete" type="text" placeholder="Enter a location" />
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

WeaterApp.propTypes = {
    className: React.PropTypes.string
};

WeaterApp.defaultProps = {
    className: 'weather-app'
};

export default WeaterApp;

import './index.scss';

import React, {Component} from 'react';

class WeaterApp extends Component {
    render() {
        const MODULE_ID = 'weather-app';
        return (
            <div className={`${MODULE_ID}`}>
                <header className={`${MODULE_ID}__header`}>
                    <div className={`${MODULE_ID}__logo`}>
                        <i className="fa fa-navicon">&nbsp;</i>
                    </div>
                    <div className={`${MODULE_ID}__search`}></div>
                    <div className={`${MODULE_ID}__actions`}>
                        <div className={`${MODULE_ID}__actions-add`}>
                            <i className="fa fa-plus">&nbsp;</i>
                        </div>
                        <div className={`${MODULE_ID}__actions-clear`}>
                            <i className="fa fa-trash-o">&nbsp;</i>
                        </div>
                    </div>
                </header>
                <div className={`${MODULE_ID}__content`}></div>
                <footer className={`${MODULE_ID}__footer`}>&nbsp;</footer>
            </div>
        )
    }
}

export default WeaterApp;

import './index.scss';

import React, {Component} from 'react';

class Logo extends Component {
    render() {
        const MODULE_ID = 'logo';
        return (
            <div className={`${MODULE_ID} font-poppins`} {...this.props}>
                WEATHER
            </div>
        )
    }
}

export default Logo;

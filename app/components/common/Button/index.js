import './index.scss';

import React, {Component} from 'react';

class Logo extends Component {
    render() {
        const MODULE_ID = 'btn';
        return (
            <button className={`${MODULE_ID}`} {...this.props} >
                {this.props.children}
            </button>
        )
    }
}

Logo.propTypes = {
    children: React.PropTypes.element
};

export default Logo;

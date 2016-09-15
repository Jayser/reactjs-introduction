import './index.scss';

import React from 'react';

const Logo = (props) => (
    <div className={`${props.className} font-poppins`} {...props}>
        WEATHER
    </div>
);

Logo.propTypes = {
    className: React.PropTypes.string
};

Logo.defaultProps = {
    className: 'logo'
};

export default Logo;

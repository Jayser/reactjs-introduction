import React, {Component, PropTypes} from 'react';

import getLocation from 'services/geoLocationService';
import {DELAY_TO_EXECUTE} from 'constants/index';

import {Input} from 'components/common';
import {delay} from 'utils/index';

class SearchLocation extends Component {
    changeState(data) {
        this.props.handlerLocation(data.results);
    }

    submitHandler({target}) {
        delay(() => {
            if (!target.value) { return; }
            getLocation(target.value, ({data}) => this.changeState(data));
        }, DELAY_TO_EXECUTE);
    }

    render() {
        return <Input
            type="text"
            id="google-place-auto-complete"
            placeholder="Enter a location"
            onChange={(e) => this.submitHandler(e) }/>;
    }
}

SearchLocation.propTypes = {
    handlerLocation: PropTypes.func.isRequired
};

export default SearchLocation;

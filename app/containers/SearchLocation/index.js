import React, {Component} from 'react';

import geoLocationService from 'services/geoLocationService';

import {delay} from 'utils/index';
import {Input} from 'components/form';

class SearchLocation extends Component {

    submitHandler({ target }) {
        delay(() => geoLocationService(target.value, (res) => {
            console.log(res)
        }), 300);
    }
    render() {
        return <Input {...this.props} onChange={(e) => this.submitHandler(e) } />;
    }
}

export default SearchLocation;
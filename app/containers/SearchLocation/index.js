import React, {Component, PropTypes} from 'react';

import geoLocationService from 'services/geoLocationService';

import {delay} from 'utils/index';
import {Input} from 'components/form';

const DELAY_TO_EXECUTE = 300;

class SearchLocation extends Component {
  submitHandler({ target }) {
    delay(() => geoLocationService(target.value, ({ data }) => {
      this.props.handlerLocation(data.results);
    }), DELAY_TO_EXECUTE);
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

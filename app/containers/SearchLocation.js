import React, {Component, PropTypes} from 'react';

import geoLocationService from 'services/geoLocationService';

import {delay} from 'utils/index';
import {Input} from 'components/form';

const DELAY_TO_EXECUTE = 500;

class SearchLocation extends Component {
  submitHandler({ target }) {
    let value = target.value;
    delay(() => {
      if (value) {
        geoLocationService(value, ({ data }) => {
          this.props.handlerSearchLocation(data.results);
          target.value = '';
        });
      }
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
  handlerSearchLocation: PropTypes.func.isRequired
};

export default SearchLocation;

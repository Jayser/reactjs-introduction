import React, {Component, PropTypes} from 'react';

import geoLocationService from 'services/geoLocationService';

import {delay} from 'utils/index';
import {Input} from 'components/form';

const DELAY_TO_EXECUTE = 500;
const LIST_TYPE = 'LCS';

class SearchLocation extends Component {
  submitHandler({ target }) {
    let value = target.value;
    delay(() => {
      if (value) {
        geoLocationService(value, ({ data }) => {
          this.props.handlerSetState(LIST_TYPE, data.results);
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
  handlerSetState: PropTypes.func.isRequired
};

export default SearchLocation;

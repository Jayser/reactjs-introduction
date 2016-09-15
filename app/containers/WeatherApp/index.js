import React from 'react';

import WeatherAppView from 'components/WeatherApp/index';
import {log} from 'utils/common';

const LifeCycleMixin2 = {
    componentWillMount() {
        log('LifeCycleMixin2 componentWillMount');
    }
};

const LifeCycleMixin = {
  componentWillMount() {
      log('LifeCycleMixin componentWillMount');
  }
};

const WeatherApp = React.createClass({
    mixins: [LifeCycleMixin, LifeCycleMixin2],
    componentWillMount:  function() {
      log('WeatherAppView componentWillMount');
    },

    render: function () {
        return (<WeatherAppView />)
    }
});

export default WeatherApp;

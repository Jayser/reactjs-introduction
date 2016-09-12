import React from 'react';
import {render} from 'react-dom';

render(React.createElement('div', null, '111'), document.getElementById('app'));

if (module.hot) {
  module.hot.accept();
}

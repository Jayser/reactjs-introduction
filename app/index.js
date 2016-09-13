import React from 'react';
import {render} from 'react-dom';

render(React.createElement('div', null, '123'), document.getElementById('app'));

if (module.hot) {
  module.hot.accept();
}

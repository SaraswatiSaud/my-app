import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import { Math } from './components/Math';
// import Home from './components/Home';
import {Provider} from 'react-redux';
import { store } from './helpers/store';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={store}>
    <Math />
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();

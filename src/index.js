import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
// import { Math } from './components/Math';
import Home from './components/Home';
import Pagination from './components/pagination';
import {Provider} from 'react-redux';
import { store } from './helpers/store';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={store}>
    <Home />
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();

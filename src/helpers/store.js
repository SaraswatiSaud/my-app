import {createStore } from 'redux';
import { counter } from '../reducers/index.reducer';
// import {composeWithDevTools} from 'redux-devtools-extension';

export const store = createStore(
  counter,
);

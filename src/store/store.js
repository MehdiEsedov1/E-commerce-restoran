import reducer from './reducer.js';
import { legacy_createStore as createStore } from 'redux';

export const store = createStore(reducer);
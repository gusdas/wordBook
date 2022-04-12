import { createStore, combineReducers } from 'redux';
import wordBook from './modules/wordBook';

const rootReducer = combineReducers({ wordBook });

const store = createStore(rootReducer);

export default store;

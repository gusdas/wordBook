import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import wordBook from './modules/wordBook';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const rootReducer = combineReducers({ wordBook });

const enhancer = applyMiddleware(...middlewares);
const store = createStore(rootReducer, enhancer);

export default store;

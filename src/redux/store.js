import {createStore, applyMiddleware} from 'redux';
import rootReducers from './reducers';

// logger
import { createLogger } from 'redux-logger';

// thunk middleware
import thunk from 'redux-thunk';

// test 1
// const mylogger = store => next => action => {
//     console.log('Action is', action);
//     next(action)
// }

const middleware = applyMiddleware(thunk, createLogger())

const store = createStore(rootReducers, middleware );

//debug
// store.subscribe(() => console.log('SUBSCRIBE', store.getState()));

export default store;

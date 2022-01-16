import {createStore} from 'redux';
import rootReducers from './reducers';

const store = createStore(rootReducers);

//debug
store.subscribe(() => console.log('SUBSCRIBE', store.getState()));

export default store;

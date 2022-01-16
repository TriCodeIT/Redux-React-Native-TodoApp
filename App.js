import React, {Component} from 'react';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import AddTodo from './src/container/AddTodo';
import Footer from './src/container/Footer';
import VisibleTodo from './src/container/VisibleTodo';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AddTodo />
        <VisibleTodo />
        <Footer />
      </Provider>
    );
  }
}

import React, {Component} from 'react';
import {Text, View} from 'react-native';
import AddTodo from './src/container/AddTodo';
import Footer from './src/container/Footer';
import VisibleTodo from './src/container/VisibleTodo';

export default class App extends Component {
  render() {
    return (
      <>
        <AddTodo />
        <VisibleTodo />
        <Footer />
      </>
    );
  }
}

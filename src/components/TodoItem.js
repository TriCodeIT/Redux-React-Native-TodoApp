import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const TodoItem = ({myTodo, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={[styles.txtItem, {textDecorationLine: myTodo.completed ? 'line-through' : 'none'}]}>{myTodo.text}</Text>
    </TouchableOpacity>
  );
};

export default TodoItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 10
  },
  txtItem: {
    fontSize: 25,
    lineHeight: 50,
    paddingLeft: 15
  }
});

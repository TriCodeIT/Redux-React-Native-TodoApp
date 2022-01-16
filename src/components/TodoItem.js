import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const TodoItem = ({myTodo}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={{fontSize: 25}}>{myTodo.text}</Text>
    </TouchableOpacity>
  );
};

export default TodoItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 10
  },
});

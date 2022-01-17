import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const TodoItem = ({myTodo, onPress, onDelete}) => {
  return (
    <View style={styles.package}>
      <TouchableOpacity onPress={onPress} style={styles.container}>
        <Text
          style={[
            styles.txtItem,
            {textDecorationLine: myTodo.completed ? 'line-through' : 'none'},
          ]}>
          {myTodo.text}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.containerBtn} onPress={onDelete}>
        <Text style={styles.btn}>X</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TodoItem;

const styles = StyleSheet.create({
  package: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  container: {
    flex: 1,
    marginLeft: 10,
  },
  txtItem: {
    fontSize: 25,
    lineHeight: 50,
    paddingLeft: 15,
  },
  containerBtn: {
    backgroundColor: 'red',
    alignItems: 'center'
  },
  btn: {
    fontSize: 25,
    lineHeight: 50,
    paddingLeft: 15,
    paddingRight: 15,
    color: 'white'
  }
});

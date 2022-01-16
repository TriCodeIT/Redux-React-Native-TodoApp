import React from 'react';
import {StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';

const AddTodo = () => {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <TextInput placeholder='Add Todo' style={styles.text}/>
      </View>
      <TouchableOpacity style={styles.right}>
        <Text style={{color: 'white'}}>Add</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddTodo;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'grey',
    flexDirection: 'row',
  },
  left: {
    height: 50,
    width: '85%',
  },
  right: {
    backgroundColor: 'blue',
    height: 50,
    width: '15%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: 'white'
  }
});

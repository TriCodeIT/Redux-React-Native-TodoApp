import React from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import TodoItem from '../components/TodoItem';

const VisibleTodo = props => {
  // renderItem1 = ({item, index}) => (
  //   <Text style={{fontSize: 25}}>{item.key}</Text>
  // );

  state = {
    todos: [
      {
        id: new Date().getTime(),
        text: 'Belajar React Native',
        completed: false,
      },
      {
        id: new Date().getTime() + 1,
        text: 'Belajar Redux',
        completed: true,
      },
    ],
  };

  return (
    <FlatList
      style={styles.container}
      data={this.state.todos}
      keyExtractor={(item, index) => index.toString()}
      ItemSeparatorComponent={() => <Text style={styles.itemSeparator} />}
      renderItem={({item, index}) => <TodoItem myTodo={item} />}
    />
  );
};

export default VisibleTodo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemSeparator: {
    height: 0.5,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
});

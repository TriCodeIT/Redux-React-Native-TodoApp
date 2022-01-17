import React from 'react';
import {connect} from 'react-redux';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import TodoItem from '../components/TodoItem';
import {confirmDelete, toggleTodo} from '../redux/actions/todos';
import todos from '../redux/reducers/todos';
import {SHOW_ACTIVE, SHOW_ALL, SHOW_COMPLETED} from '../redux/actions/types';

const VisibleTodo = props => {
  // renderItem1 = ({item, index}) => (
  //   <Text style={{fontSize: 25}}>{item.key}</Text>
  // );

  return (
    <>
      {/* <Text>{JSON.stringify(props)}</Text> */}
      <FlatList
        style={styles.container}
        data={props.myTodos}
        keyExtractor={(item, index) => index.toString()}
        ItemSeparatorComponent={() => <Text style={styles.itemSeparator} />}
        renderItem={({item, index}) => (
          <TodoItem
            onPress={() => props.toggleList(item.id)}
            onDelete={() => props.onDelete(item.id)}
            myTodo={item}
          />
        )}
      />
    </>
  );
};

const filterTodo = (todos, myFilter) => {
  switch (myFilter) {
    case SHOW_ALL:
      return todos;
    case SHOW_ACTIVE:
      return todos.filter(td => !td.completed);
    case SHOW_COMPLETED:
      return todos.filter(td => td.completed);
    default:
      alert('Not Defined' + myFilter);
      return todos;
  }
};

const mapStateToProps = state => ({
  myTodos: filterTodo(state.todos, state.visibilityFilter),
});

const mapDispatchToProps = dispatch => ({
  toggleList: id => dispatch(toggleTodo(id)),
  onDelete: id => dispatch(confirmDelete(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(VisibleTodo);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemSeparator: {
    height: 0.5,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
});

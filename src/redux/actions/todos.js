import { Alert } from 'react-native';
import {ADD_TODO, DELETE_TODO, SHOW_ACTIVE, SHOW_COMPLETED, TOGGLE_TODO} from './types';
import { setVisibilityFilter } from './visibilityFilter';

export const addTodo = text => (dispatch, getState) => {
  //   console.log('GetState: ', getState());
  const {todos} = getState();
  const todoExist = todos.find(
    td => td.text.toLowerCase() === text.toLowerCase(),
  );

  if (todoExist) {
    alert(`Sorry a new todo "${text} is already exist"`);
    dispatch(
        setVisibilityFilter(todoExist.completed ? SHOW_COMPLETED : SHOW_ACTIVE)
    )
    return;
  }

  dispatch({
    type: ADD_TODO,
    text,
  });
};

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  id,
});

export const deleteTodo = id => ({
  type: DELETE_TODO,
  id
})

export const confirmDelete = id => (dispatch, getState) => {
  const { todos } = getState()

  // get todo
  const todo = todos.find(td => td.id === id)

  //confirm
  Alert.alert(
    'Confirm',
    `Are you sure to delete todo with name '${todo.text}' ?`,
    [
      {text: 'Cancel', onPress: () => null},
      {text: 'OK', onPress: () => {
        //fake async
        setTimeout(() => {
          dispatch(deleteTodo(id))
        }, 1000)
      }}
    ]
  )
}

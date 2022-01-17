import {ADD_TODO, DELETE_TODO, TOGGLE_TODO} from '../actions/types';

const initialState = [
  {
    id: new Date().getTime(),
    text: 'Belajar React Native',
    completed: false,
  },
  {
    id: new Date().getTime() + 1,
    text: 'Belajar Redux',
    completed: false,
  },
];

const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: new Date().getTime(),
          text: action.text,
          completed: false,
        },
      ];
    case TOGGLE_TODO:
      return state.map(todo =>
        todo.id === action.id ? {...todo, completed: !todo.completed} : todo,
      );
    case DELETE_TODO:
      const newTodos = state.filter(td => td.id !== action.id);
      return newTodos;
    default:
      return state;
  }
};

export default todos;

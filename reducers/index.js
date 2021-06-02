const stockReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [...state, { id: 1, task: action.task, completed: false }];
    case "REMOVE":
      return state.filter((todo) => todo.id !== action.id);
    case "TOGGLE":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo,
      );

    case "EDIT":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, task: action.newTask } : todo,
      );
    default:
      return state;
  }
};

export default stockReducer;

import { createReduxModule } from "hooks-for-redux";

const initialState = {
  todoList: [],
};

export const [useTodos, { handleTodo, addTodo, deleteTodo }] =
  createReduxModule("todos", initialState, {
    addTodo: (state, todo) => {
      return {
        ...state,
        todoList: [...state.todoList, todo],
      };
    },
    deleteTodo: (state, id) => {
      const updatedTodos = state.todoList.filter((todo) => todo.id !== id);
      return {
        ...state,
        todoList: updatedTodos,
      };
    },

    handleTodo: (state, id) => {
      const updatedTodos = state.todoList.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
      return {
        ...state,
        todoList: updatedTodos,
      };
    },
  });

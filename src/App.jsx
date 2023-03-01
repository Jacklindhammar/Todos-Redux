import React from 'react'
import { useTodos, addTodo, handleTodo, deleteTodo } from './Redux/todos';
import { useState } from 'react'


function App() {
  
  const [todo, setTodo] = useState("");
const { todoList } = useTodos()

function handleSubmit(e) {
e.preventDefault()

const newTodo = {
  id: new Date().getTime(),
  text: todo,
  completed: false,
};

addTodo(newTodo)

}

  return (
    <div className="">
      <div className="flex flex-col items-center">
        <h1 className="text-7xl mt-20 mb-20">Todos</h1>
        <form onSubmit={handleSubmit}>
          <input
            className="border-solid border-2 border-black mr-10"
            type="text"
            onChange={(e) => setTodo(e.target.value)}
            value={todo}
          />
          <button
            className="text-xl bg-blue-900 p-2 border-2 border-black text-white"
            type="submit"
          >
            Add Todo
          </button>
        </form>
      </div>
      {todoList.map((todo) => (
        <div className="flex flex-col items-center mt-4">
          <div
            className="flex justify-between mt-6 border-2 h-32 pt-2  pl-2 pr-2 shadow-2xl w-56"
            key={todo.id}
          >
            <div
              className={todo.completed ? "line-through text-3xl" : "text-3xl"}
            >
              {todo.text}
            </div>
            <div className="">
              <div className="bg-green-500 h-10  p-2  border-green-900 border-2 text-white font-semibold text-center">
                <button className="" onClick={() => handleTodo(todo.id)}>Done</button>
              </div>
              <div className="bg-red-500 h-10  p-2  border-red-900 border-2 text-white font-semibold text-center mt-2">
                <button className="" onClick={() => deleteTodo(todo.id)}>
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
      }

export default App

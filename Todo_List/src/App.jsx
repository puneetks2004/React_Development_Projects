import React, { useState, useEffect } from 'react'
import { TodoProvider } from './context/TodoContext.js'
import './App.css'
import TodoForm from './components/TodoForm.jsx'
import TodoItems from './components/TodoItems.jsx'

function App() {
  const [todos, setTodos] = useState([])//since todos has a array of todos

  const addTodo = (todo) => {
    setTodos((prev) => [{
      id: Date.now(), ...todo
    }
      , ...prev])//new todo before older todo ------>to arrange
  }


  const updateTodo = (id, todo) => {//if id matches  than  update todo else don't update
    setTodos((prev => prev.map((prevTodo) =>
      (prevTodo.id === id ? todo : prevTodo)
    )))
  }



  const deleteTodo = (id) => {//if found todo with that id than store all todos that don't match this todo's id 
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }


  const toggleComplete = (id) => {//to alter completed property 
    setTodos((prev) => prev.map((prevTodo) => prevTodo.id === id ? { ...prevTodo, completed: !prevTodo.completed } : prevTodo))
  }

  //to get item  from local storage
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))

    if (todos && todos.length > 0) {
      setTodos(todos)
    }
  }, [])


  //to set item to local storage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])


  return (
    <TodoProvider value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">

            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {todos.map((todo) => (<div key={todo.id}
              className='w-full'


            >
              <TodoItems todo={todo} />
            </div>

            ))}

          </div>
        </div>
      </div>


    </TodoProvider>
  )
}

export default App

import { useState } from 'react'
import './App.css'
import TodoList from './components/TodoList'
import AddTodo from './components/AddTodo'
import { useTodoContext } from './components/todo-create-context'

function App() {
  return (
    <>
      <AddTodo/>
      <TodoList/>    
    </>
  )
}

export default App

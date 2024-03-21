import { useState } from 'react'
import './App.css'
import TodoList from './components/TodoList'
import AddTodo from './components/AddTodo'
const intialTodos=[
  {id:crypto.randomUUID(),text:'Read the context Api and useReducer',isFinished:true},
  {id:crypto.randomUUID(),text:'Complete Closures',isFinished:false},
  {id:crypto.randomUUID(),text:'Complete Notes Project',isFinished:true},
]
function App() {
  const [todos,setTodos] = useState(intialTodos)

  function AddTodos(addTodo){
    console.log(addTodo)
    const newTodo = {
      id:crypto.randomUUID(),
      text:addTodo,
      isFinished:false
    }
    setTodos([...todos,newTodo])
  }

  function deleteTodos(id){
    const newTodos= todos.filter((item)=>item.id!==id)
    setTodos(newTodos)
  }
  function editTodos(id,content){
    console.log(id,"happy",content)
    const EditTodos = todos.map((item)=>{
      console.log(item.id,"copy",id)
      if(item.id===id){
        item.text=content
      }
      return item
    })
    setTodos(EditTodos)
  }
  function updateToggle(id,state){
    const UpdateTodos = todos.map((item)=>{
      console.log(item.id,"copy",id)
      if(item.id===id){
        item.isFinished=!state
      }
      return item
    })
    setTodos(UpdateTodos)
  }

  return (
    <>
      <AddTodo handleAddTodo={AddTodos}/>
      <TodoList todos={todos}  deleteTodos={ deleteTodos} editTodos={editTodos} updateToggle={updateToggle}/>    
    </>
  )
}

export default App

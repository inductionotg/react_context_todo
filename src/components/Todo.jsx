import { useState } from 'react'
import './Todo.css'
import { useTodoContext } from './todo-create-context'
function Todo({isFinished,text,id}){
    const [content,setContent]= useState(text)
    const [edit,setEdit]= useState(false)
    const {deleteTodos,editTodos,updateToggle} = useTodoContext()
    console.log(id)
    return (
        <div className="todo-wrapper-container">
                <input type="checkbox" checked={isFinished} onChange={()=>updateToggle(id,isFinished)}/>
                {
                    edit?(
                        <input
                            type="text"
                            value={content}
                            onChange={(e)=>setContent(e.target.value)}
                        />
                    ):(
                        <p style={{textDecoration:isFinished?'line-through' : 'none'}}>{text}</p>
                    )
                }
                
                <button onClick={()=>
                    {
                        setEdit(!edit)
                        editTodos(id,content)
                    }}>{edit?'Save':'Edit'}</button>
                <button onClick={()=>deleteTodos(id)} >Delete</button>
        </div>
    )
}
export default Todo
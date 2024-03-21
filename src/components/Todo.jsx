import { useState } from 'react'
import './Todo.css'
function Todo({isFinished,text,id,deleteTodos,editTodos,updateToggle}){
    const [content,setContent]= useState(text)
    const [edit,setEdit]= useState(false)
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
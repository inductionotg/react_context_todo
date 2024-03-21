import { useState } from 'react'
import './Todo.css'
import { useTodoContext } from './todo-create-context'
function Todo({isFinished,text,id}){
    const [content,setContent]= useState(text)
    const [edit,setEdit]= useState(false)
    const {dispatch} = useTodoContext()
    console.log(id)
    return (
        <div className="todo-wrapper-container">
                <input type="checkbox" checked={isFinished} onChange={()=>dispatch({type:'handle_toggle',payload:{id: id, isFinished: isFinished}}) /*updateToggle(id,isFinished)*/}/>
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
                        dispatch({type:'edit_todo',payload:{id,content}})
                        //editTodos(id,content)
                    }}>{edit?'Save':'Edit'}</button>
                <button onClick={()=>dispatch({type:'delete_todo',payload:{id}})/*deleteTodos(id)*/} >Delete</button>
        </div>
    )
}
export default Todo
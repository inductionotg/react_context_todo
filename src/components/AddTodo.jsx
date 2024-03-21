import { useState } from "react"
import { useTodoContext } from "./todo-create-context"

function AddTodo(){
    const [addTodo,setAddTodo] = useState('')
    const {dispatch} = useTodoContext()
    return(
        <div>
            <input
                type="text"
                value={addTodo}
                onChange={(e)=>setAddTodo(e.target.value)}
            />
            <button onClick={()=>
                {//AddTodos(addTodo)
                dispatch({type:'add_todo',payload:{addTodo}})
                setAddTodo('')}
                }>Add Todo</button>
        </div>
    )
}
export default AddTodo
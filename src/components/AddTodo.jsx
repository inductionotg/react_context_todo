import { useState } from "react"

function AddTodo({handleAddTodo}){
    const [addTodo,setAddTodo] = useState('')
    return(
        <div>
            <input
                type="text"
                value={addTodo}
                onChange={(e)=>setAddTodo(e.target.value)}
            />
            <button onClick={()=>
                {handleAddTodo(addTodo)
                setAddTodo('')}
                }>Add Todo</button>
        </div>
    )
}
export default AddTodo
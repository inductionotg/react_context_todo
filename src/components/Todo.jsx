import './Todo.css'
function Todo({isFinished,text,id,deleteTodos}){
    return (
        <div className="todo-wrapper-container">
                <input type="checkbox" checked={isFinished}/>
                <p>{text}</p>
                <button>Edit</button>
                <button onClick={()=>deleteTodos(id)} >Delete</button>
        </div>
            
       
    )
}
export default Todo
import Todo from "./Todo";
function TodoList({todos,deleteTodos,editTodos,updateToggle}){
    console.log(todos)
    return (
        <div>
            {todos.map((item)=>{
                return (
                    <Todo id={item.id} text={item.text} isFinished={item.isFinished} deleteTodos={ deleteTodos} editTodos={editTodos} updateToggle={updateToggle}/>
                )
            })}
        </div>
    )

}
export default TodoList
import Todo from "./Todo";
function TodoList({todos,deleteTodos}){
    console.log(todos)
    return (
        <div>
            {todos.map((item)=>{
                return (
                    <Todo id={item.id} text={item.text} isFinished={item.isFinished} deleteTodos={ deleteTodos}/>
                )
            })}
        </div>
    )

}
export default TodoList
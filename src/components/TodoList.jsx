import Todo from "./Todo";
import { useTodoContext } from "./todo-create-context";
function TodoList(){
    const {todos} = useTodoContext()
    console.log(todos)
    return (
        <div>
            {todos.map((item)=>{
                return (
                    <div key={item.id}>
                        <Todo id={item.id} text={item.text} isFinished={item.isFinished} />
                    </div>
                )
            })}
        </div>
    )

}
export default TodoList
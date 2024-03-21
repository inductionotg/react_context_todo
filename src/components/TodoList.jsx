import Todo from "./Todo";
import { useTodoContext } from "./todo-create-context";
function TodoList(){
    const {state} = useTodoContext()
    console.log(state)
    return (
        <div>
            {state.map((item)=>{
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
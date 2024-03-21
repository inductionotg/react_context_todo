function TodoReducer(state,action){
    if(action.type==='add_todo'){
        const newTodo = {
            id:crypto.randomUUID(),
            text:action.payload.addTodo,
            isFinished:false
          }
        return [...state,newTodo]
    }
    else if(action.type==='edit_todo'){
        const EditTodos = state.map((item)=>{
            if(item.id===action.payload.id){
              item.text=action.payload.content
            }
            return item
          })
          return EditTodos
        }
    else if(action.type==='delete_todo'){
        console.log("delete",state,action)
        const newTodos= state.filter((item)=>item.id!==action.payload.id)
        return newTodos
    }
    else if(action.type==='handle_toggle'){
        console.log("handle_update",state,"action",action)
        const UpdateTodos = state.map((item)=>{
            if(item.id===action.payload.id){
              item.isFinished=!action.payload.isFinished
            }
            return item
          })
          return UpdateTodos
    }
    else {
        return state
    }

}
export default TodoReducer
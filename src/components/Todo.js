import { useState } from "react";
import "../styles/Todo.css"
const Todo = () => {
    const [todo, settodo] = useState("");
    const [alltodo, setalltodo] = useState([]);
    const add=()=>{
        let todoObj ={todo}
        setalltodo([...alltodo,todoObj]);
        settodo("")
        console.log(alltodo)
    }
  return (
    <>
      <div className="general-div">
        <center>
            <h1>MyTodos</h1>
       <div className="todo-input-div">
         <h1 className="text-light">Add Todo</h1>
         <input type="text" className="form-control w-75 mb-3" placeholder="Enter todos" onChange={(e)=>settodo(e.target.value)} value={todo}/>
         <button className="btn w-75" onClick={add}>Add Todo</button>
       </div>
       <div>
        <h1>All Todos</h1>
        {
            alltodo==""?<div>No todos</div>:
            alltodo.map((todo,index)=>(
                <>
               <div className="todo-carrieer" key={todo}>
                <div>{todo.todo}</div>
               </div>
                </>
            ))
        }
       </div>
       </center>
      </div>
    </>
  )
}

export default Todo;
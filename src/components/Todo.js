import { useEffect, useState } from "react";
import "../styles/Todo.css"
const Todo = () => {
    const [todo, settodo] = useState("");
    const [alltodo, setalltodo] = useState([]);
    useEffect(() => {
        if(localStorage.alltodos){

            let localalltodos = JSON.parse(localStorage.alltodos);
            setalltodo(localalltodos)
        }else{
            setalltodo([])
        }
    }, [])
    
    const add=()=>{
        let todoObj ={todo}
        setalltodo(()=>{
        let recentTodo=[...alltodo,todoObj]
        localStorage.alltodos=JSON.stringify(recentTodo)
        return recentTodo
        console.log(recentTodo)
        });
        settodo("")
        console.log(alltodo)
    }
    // const getData =()=>{
        
    // }
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
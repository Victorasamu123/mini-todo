import { useEffect, useState } from "react";
import "../styles/Todo.css"
const Todo = () => {
    const [todo, settodo] = useState("");
    const [alltodo, setalltodo] = useState([]);
    const [editedTodo, seteditedTodo] = useState("")
    const [editObject, seteditObject] = useState({})
    const [editIndex, seteditIndex] = useState(0)
    useEffect(() => {
        if(localStorage.alltodos){

            let localalltodos = JSON.parse(localStorage.alltodos);
            setalltodo(localalltodos)
        }else{
            setalltodo([])
        }
    }, [])
    
    const add=()=>{
        if (todo=="") {
            alert("enter correct todo")
        } else {
            
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
    }
    const delet = (ind) => {
        let newAllTodo = [...alltodo];
        let filteredTodo = newAllTodo.filter((todo, index) => index != ind)
        setalltodo(filteredTodo)
        setalltodo(()=>{
            let recentTodo=[...filteredTodo,todoObj]
            localStorage.alltodos=JSON.stringify(recentTodo)
            return recentTodo
            });
    }
    const editStudent=(index)=>{
        seteditIndex(index)
        let selectedTodo=alltodo[index]
        seteditedTodo(selectedTodo.todo)
        seteditObject(selectedTodo)
    }
    const updateChanges=()=>{
        let updatedDetails={
            todo:editedTodo
        }
        let newAllTodo=[...alltodo]
        newAllTodo[editIndex]=updatedDetails
        setalltodo(newAllTodo)
        setalltodo(()=>{
            let recentTodo=[...newAllTodo,todoObj]
            localStorage.alltodos=JSON.stringify(recentTodo)
            return recentTodo
            });

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
         <input type="text" className="form-control w-75 mb-3" placeholder="Enter todos" required onChange={(e)=>settodo(e.target.value)} value={todo}/>
         <button className="btn1 w-75" onClick={add}>Add Todo</button>
       </div>
       <div>
        <h1>All Todos</h1>
        {
            alltodo==""?<div>No todos</div>:
            alltodo.map((todo,index)=>(
                <>
               <div className="todo-carrieer mb-2" key={todo}>
                <div className="todo pt-2 text-light">{todo.todo}</div>
                <div className="btn-div">
                    <button className="btn btn-warning me-2" data-bs-toggle="modal" data-bs-target="#staticBackdrop1" onClick={()=>editStudent(index)}>edit</button>
                    <button className="btn btn-danger" onClick={() => delet(index)}>del</button>
                </div>
               </div>
                </>
            ))
        }
       </div>
       </center>
      </div>
      <div class="modal fade" id="staticBackdrop1" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="staticBackdropLabel">Edit</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                        <input type="text" className='form-control my-2' placeholder='Todo activity' onChange={(e)=>seteditedTodo(e.target.value)} value={editedTodo}/>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onClick={updateChanges}>Edit</button>
                        </div>
                    </div>
                </div>
            </div>
    </>
  )
}

export default Todo;
import { useState } from "react";
import styles from "./Addtodo.module.css"
function Addtodo({onNewItem}){
const [todoName, setTodoName] = useState();
const [dueDate, setDueDate] = useState();

const handleNameChange = (event) =>{
setTodoName(event.target.value);
}
const handleDateChange = (event) =>{
setDueDate(event.target.value);
}
const handleAddButtonClicked = () =>{
  onNewItem(todoName, dueDate);
  setDueDate("");
  setTodoName("");
}


    return <div className="container text-center">
    <div className="row first-row">
      <div className="col-6"><input type="text" 
      placeholder="Enter Todo Here" value={todoName} onChange={handleNameChange}/></div>
      <div className="col-4"><input type="date" value={dueDate} onChange={handleDateChange}/></div>
      <div className="col-2"><button  type="button" 
      className="btn btn-success button1"
       onClick={handleAddButtonClicked}> Add </button></div>
    </div>
  </div>
}
export default Addtodo;

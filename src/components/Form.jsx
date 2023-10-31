/* eslint-disable react/prop-types */
import React from "react";

const Form = ({todo,setTodo,todolist,setTodoList}) =>{

    const handleChange = (event) =>{
        setTodo(event.target.value)
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        if(todo!=""){
            setTodoList([...todolist, {todo:todo,id:Math.random()}]);
            setTodo("");
        }
        else{
            alert("No task has been entered")
        }
        
    }
    return(
        <React.Fragment>
            <form onSubmit={handleSubmit}>
                <input 
                placeholder="Enter the task"
                type="text"
                value={todo}
                onChange={handleChange}
                />
                <button type="submit">Add Task</button>
            </form>
        </React.Fragment>
    )
}
export default Form;
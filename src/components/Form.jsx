/* eslint-disable react/prop-types */
import styles from '../styles/Form.module.css';
import React from "react";

const Form = ({todo,setTodo,todolist,setTodoList}) =>{

    const handleChange = (event) =>{
        setTodo(event.target.value)
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        if(todo!=""){
            setTodoList([...todolist, {todo:todo,id:Math.random(),completed:false}]);
            setTodo("");
        }
        else{
            alert("No task has been entered")
        }
        
    }
    return(
        <React.Fragment>
            <form className={styles.form} onSubmit={handleSubmit}>
                <input 
                className={styles.inputField}
                placeholder="Enter the task"
                type="text"
                value={todo}
                onChange={handleChange}
                />
                <button className={styles.button} type="submit">Add Task</button>
            </form>
        </React.Fragment>
    )
}
export default Form;
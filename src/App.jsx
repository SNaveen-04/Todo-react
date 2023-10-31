import Form from "./components/Form"
import Header from "./components/Header"
import React, { useState } from "react"
import List from "./components/List"

function App() {
  
  const[todo,setTodo] = useState("")
  const[todolist,setTodoList] = useState([])
  const[completedList,setCompletedList] = useState([])
  return (
    <React.Fragment>
      <Header />
      <Form
        todo={todo}
        setTodo={setTodo}
        todolist={todolist}
        setTodoList={setTodoList}
      />
      <List 
        todolist={todolist} 
        setTodoList={setTodoList}
        completedList={completedList}
        setCompletedList={setCompletedList}
      />
    </React.Fragment>
  )
}

export default App

/* eslint-disable react/prop-types */
const Item = ({item,todolist,setTodoList,index}) =>{
    //delete a item from the list
    const handleDelete = () =>{
        setTodoList(todolist.filter((todo) => todo.id != item.id ));
    }
    //edit a item from the list
    const handleEdit = () =>{
        var editedtodo = prompt("Edit your todo",item.todo);
        var newtodo = [...todolist];
        newtodo[index].todo = editedtodo;
        setTodoList(newtodo);
    }
    return(
        <div>
            <div>{item.todo}</div>
            <button onClick={handleDelete}>Delete</button>
            <button onClick={handleEdit}>Edit</button>
        </div>
    )
}

export default Item;
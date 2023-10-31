/* eslint-disable react/prop-types */
import styles from '../styles/Item.module.css';
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
    return (
      <div className={styles.ItemContainer}>
        <div className={styles.item}>{item.todo}</div>
        <div className={styles.btnContainer}>
          <button className={styles.button} onClick={handleDelete}>
            Delete
          </button>
          <button className={styles.button} onClick={handleEdit}>
            Edit
          </button>
        </div>
      </div>
    );
}

export default Item;
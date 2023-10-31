/* eslint-disable react/prop-types */
import styles from '../styles/Item.module.css';
const Item = ({
  item,
  todolist,
  setTodoList,
  index,
  completedList,
  setCompletedList,
}) => {
  //delete a item from the list
  const handleDelete = () => {
    setTodoList(todolist.filter((todo) => todo.id != item.id));
  };

  //edit a item from the list
  const handleEdit = () => {
    var editedtodo = prompt("Edit your todo", item.todo);
    var newtodo = [...todolist];
    newtodo[index].todo = editedtodo;
    setTodoList(newtodo);
  };

  //mark a item as completed
  const handleComplete = (err) => {
    var completedItem = todolist[index];
    setCompletedList([...completedList, completedItem]);
    handleDelete();
    if (err) {
      console.log(err);
    }
  };

  return (
    <div className={styles.ItemContainer}>
      <div className={styles.item}>{item.todo}</div>
      <div className={styles.btnContainer}>
        <button className={styles.button} onClick={handleEdit}>
          Edit
        </button>
        <button className={styles.button} onClick={handleComplete}>
          Complete
        </button>
        <button className={styles.button} onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Item;
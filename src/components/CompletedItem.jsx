/* eslint-disable react/prop-types */
import styles from "../styles/Item.module.css";
const CompletedItem = ({ item, completedList, setCompletedList }) => {
  //delete a item from the list
  const handleDelete = () => {
    setCompletedList(completedList.filter((todo) => todo.id != item.id));
  };
  return (
    <div className={styles.ItemContainer}>
      <div className={styles.Completeditem}>{item.todo}</div>
      <div className={styles.btnContainer}>
        <button className={styles.button} onClick={handleDelete}>
          X
        </button>
      </div>
    </div>
  );
};

export default CompletedItem;

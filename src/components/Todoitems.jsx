import Todoitem from "./Todoitem";
import styles from "./todoitems.module.css"
const Todoitems = ({ todoItems, onDeleteClick }) => {
  return (
    <div className={styles.itemscontainer}>
      {todoItems.map((item) => (
        <Todoitem todoDate={item.dueDate}
         todoName={item.name} onDeleteClick= {onDeleteClick}></Todoitem>
      ))}
    </div>
  );
};
export default Todoitems;

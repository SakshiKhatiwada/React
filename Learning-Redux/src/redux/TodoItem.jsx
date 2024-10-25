import { useDispatch } from "react-redux";
import { deleteTodo, deleteTodoAsync, toggleComplete, toggleCompleteAsync } from "./todoSlice";

const TodoItem = ({ id, title, completed }) => {

  const dispatch = useDispatch();

  const handleCheckboxClick = () => {
    // dispatch(
    //     toggleComplete({id, completed: !completed})
    // );
    dispatch(toggleCompleteAsync({ id, completed: !completed }));

  }

  const handleDeleteClick = () => {
    // console.log('deleted');
    // dispatch(
    // deleteTodo({id})
    // );
    dispatch(deleteTodoAsync({id}));
  }

  // console.log('data:',id, title, completed);
  return (
    <div className="list-items">
      {/* <p>  ID: {id} </p>
    <p> Title: <b>{title}</b></p>
    <p> Completed: {`${completed}`}</p> */}
      {/* since it is boolean, it's not shown in UI directly -> we retrieve its value as string */}
      {/* <br/> */}

      <span className="inputCheckbox">
        <input
          type="checkbox"
          className="check"
          onChange={handleCheckboxClick}
          checked={completed}
        />
        {title}
        {/* {completed ? "\u2714" : "\u274C"} */}
      </span>
      <button className="deleteButton"
        onClick={handleDeleteClick}
      >Delete</button>

    </div>
  )
}

export default TodoItem
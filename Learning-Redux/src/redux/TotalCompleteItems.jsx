import { useSelector } from "react-redux"

const TotalCompleteItems = () => {
    const todos = useSelector((state)=>{
        return state.todoItems.filter((todo)=> todo.completed === true);
    })
  return (
    <h4>
      Total Completed items: {todos.length}  
    </h4>
  )
}

export default TotalCompleteItems
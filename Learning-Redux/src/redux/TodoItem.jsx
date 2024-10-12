
const TodoItem = ({id, title, completed}) => {
    console.log('data:',{id, title, completed});
  return (
    <>
        <b>ID: </b> {id}
        <br/>
        <b>Title: </b> {title}
        <br/>
        <b>Completed: </b> {completed}
        <br/>
        
    </>
  )
}

export default TodoItem
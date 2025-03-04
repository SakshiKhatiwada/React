import { memo, useState } from 'react'
import {useDispatch} from 'react-redux';
import { addTodo, addTodoAsync } from './todoSlice';


function AddToDoForm() {
    const [value, setValue] = useState('');
    const dispatch = useDispatch();

    //submit func
    // const onSubmit = (event) => {
    //     event.preventDefault();
    //     if (value) {
    //         //ANCHOR dispatch is called here!
    //         dispatch(
    //             addTodo(
    //                 {title: value}
    //             )
    //         )
    //         setValue('');//clears value again
    //         // alert('form submitted!');
    //     }
    // };
    const onSubmit = (event) => {
        event.preventDefault();
        if (value) {
            //ANCHOR dispatch is called here!
            dispatch(
                addTodoAsync(
                    {title: value}
                )
            )
        }
    };

  return (
    <form onSubmit={onSubmit} className='form'>
        {/* <label for='todo'>Name</label> */}
        <input id='todo' type='text' placeholder='add todo'
        value={value}
        onChange={(event)=> setValue(event.target.value)}/>

        <button type='submit'>add to list</button>
    </form>
  )
}

export default memo(AddToDoForm)
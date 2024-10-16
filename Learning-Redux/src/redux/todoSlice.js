//Slice -> give us a way to store a piece, or slice, of data, and gives us all the things we need to change and retrieve the data.

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

//API part
//todos/getTodoAsync is the name
export const getTodosAsync = createAsyncThunk('todos/getTodoAsync', async ()=> {
    const res = await fetch('http://localhost:7000/todos');
    if(res.ok){
        const todos = await res.json();
        // return todos; //-> is the payload of the action (whatever we return here is the payload of the action)
        return {todos};
        //once this function returns, it will dispatch an action
    }
});
//NOTE Thunk is a func that returns another func. This thunk is the new action we dispatch from our components. This will in turn dispatch its own action when the response completes, with the data from the response as the payload.


export const addTodoAsync = createAsyncThunk('todos/addTodoAsync', async (payload) => {
    //this payload contains whatever was sent to us by the component when it dispatched the action.
    const res = await fetch('http://localhost:7000/todos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({title: payload.title})
  });

  if (res.ok) {
    const todo = await res.json();
    return {todo};
  }
});

export const todoSlice = createSlice(
    
    
    {
        name: 'todoItems',
        initialState: [
            {id: 1, title: 'item1', completed: false},
            {id: 2, title: 'item2', completed: true},
            {id: 3, title: 'item3', completed: true},
            {id: 4, title: 'item4', completed: false},
            {id: 5, title: 'item5', completed: false},
            // if want some initial tasks 
            ],
        reducers: {
            //reducers generated inside todoSlice
            // 1
            addTodo: (state, action) => {
                //state-> current state of this slice
                //action -> contains the type and payload

                const todo = {
                    id: state.length + 1,//simple incremental ID
                    // to create unique id
                    title: action.payload.title,
                    completed: false,
                };
                state.push(todo); // redux will take this and update the store
            },
            // 2
            //When our component dispatches the toggleComplete action, this reducer will handle that action.
            toggleComplete: (state, action) => {
                const index = state.findIndex((todo) => todo.id === action.payload.id);
                state[index].completed = action.payload.completed;
            },

            // 3
            deleteTodo: (state,action)=>{
                return state.filter((todo)=>todo.id !== action.payload.id);
                //return -> because filter function gives a new array of items
            },
        },

        //to handle the actions related to Thunk, we need extraReducers object
        //NOTE was old way of defining extraReducers 🤦‍♀️
        // extraReducers: {
        //     //when the thunk dispatches this action -> API call in our thunk has completed!
        //     [getTodosAsync.fulfilled] : (state,action)=> {
        //         return action.payload.todos;
        //     },

        //     [addTodoAsync.fulfilled]: (state, action) => {
        //         state.push(action.payload.todo);
        //     },
        // }

            extraReducers: (builder) => {
                builder.addCase(getTodosAsync.fulfilled, (state, action) =>{
                return action.payload.todos;
                })
                builder.addCase(addTodoAsync.fulfilled, (state, action) => {
                state.push(action.payload.todo);
                })
            }
    }
);

export const {addTodo, toggleComplete, deleteTodo} = todoSlice.actions; //-> obj destructing
export default todoSlice.reducer;
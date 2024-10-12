//Slice -> give us a way to store a piece, or slice, of data, and gives us all the things we need to change and retrieve the data.

import { createSlice } from '@reduxjs/toolkit';

export const todoSlice = createSlice(
    {
        name: 'todoItems',
        initialState: [
            {id: 1, title: 'item1', completed: false},
            {id: 2, title: 'item2', completed: true},
            {id: 3, title: 'item3', completed: true},
            {id: 4, title: 'item4', completed: false},
            {id: 5, title: 'item5', completed: false},
            ],
        reducers: {
            //action generated inside todoSlice
            addTodo: (state, action) => {
                //state-> current state of this slice
                //action -> contains the type and payload

                const todo = {
                    id: new Date(),// to create unique id
                    title: action.payload.title,
                    completed: false,
                };
                state.push(todo); // redux will take this and update the store
            }
        }
    }
);

export const {addTodo} = todoSlice.actions; //-> obj destructing
export default todoSlice.reducer;
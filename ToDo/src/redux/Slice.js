import { createSlice } from "@reduxjs/toolkit";


export const Slice = createSlice(
    {
name: 'todo',
initialState: [
    //{id: 1, title: hw, completed: false} -> format
],
reducers: {
    //1. add todo
    addTodo: (state, action) => {
        const todo = {
            id: state.length + 1, //index + 1 as id
            title: action.payload.title,
            completed: false //initially it's false
        };
        state.push(todo);   //pushing todo to previously managed state

    },

    //2. delete todo
    deleteTodo: (state, action) => {
            return (state.filter(todo=>todo.id !== action.payload.id));//filter out all the states that doesn't match item-to-be-deleted's id
    },

    //3. toggle task -> completed or not?
    toggleTask: (state, action) => {
        const index = state.findIndex((todo) => todo.id == action.payload.id); //returns the index of first element that matches the payload id
        state[index].completed = action.payload.completed;
    }
}
}
);

export const {addTodo, deleteTodo, toggleTask} = Slice.actions; //obj destructuring, exporting actions 
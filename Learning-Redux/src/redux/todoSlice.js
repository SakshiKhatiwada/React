//Slice -> give us a way to store a piece, or slice, of data, and gives us all the things we need to change and retrieve the data.



export const todoSlice = createSlice(
    
    
    {
        name: 'todoItems',
        initialState: [
            // {id: 1, title: 'item1', completed: false},
            // {id: 2, title: 'item2', completed: true},
            // {id: 3, title: 'item3', completed: true},
            // {id: 4, title: 'item4', completed: false},
            // {id: 5, title: 'item5', completed: false},
            //if want some initial tasks 
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
            }
        }
    }
);

export const {addTodo, toggleComplete, deleteTodo} = todoSlice.actions; //-> obj destructing
export default todoSlice.reducer;
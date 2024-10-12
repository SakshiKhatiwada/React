import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './todoSlice';
//todoReducer -> name given during importing as it is default-export

//NOTE - Store holds all our reducers and manages them for us!

export default configureStore({
    reducer: {
        todoItems: todoReducer,
    },
});
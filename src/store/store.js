import {configureStore} from '@reduxjs/toolkit';
import counterSlice from './feature/counter/counterSlice';

const store=configureStore({
    reducer:{
        counter:counterSlice.reducer
    }
})

export default store;


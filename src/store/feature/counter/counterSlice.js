import { createSlice } from "@reduxjs/toolkit";

//this is the slide
const counterSlice=createSlice({
    name:'counter',
    initialState:{
        value:0
    },
    reducers:{
        increment:(state)=>{
            state.value+=1;
           
        },
        decrement:(state)=>{
            state.value-=1;
           
        },
        incrementbyAmount:(state,action)=>{
            state.value+=parseFloat(action.payload);
           
        }
    }
})

export const {increment,decrement,incrementbyAmount}=counterSlice.actions;
export default counterSlice;
import { createSlice } from "@reduxjs/toolkit";
/* A function that accepts an initial state, an object full of reducer functions, and a "slice name", and automatically generates action creators and action types that correspond to the reducers and state.

The reducer argument is passed to createReducer().
 */
const CounterSlice= createSlice({
    name:'CounterApp',
    initialState:{
        value:0
    },
    //action are created inside this reducers key as object
    reducers:{
        //function to increment number
        increment:(state,action)=>{
            state.value += action.payload
        },
        //function to decrement number
        decrement:(state,action)=>{
            state.value -=action.payload
        },
        //function to reset
        reset:(state)=>{
            state.value =0
        }
    }
    
})
export const {increment,decrement,reset}=CounterSlice.actions

export default CounterSlice.reducer



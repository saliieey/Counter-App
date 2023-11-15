import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "./CounterSlice";

//to store 
export const store = configureStore({
    //reducer can only update value of state in store
    //reducer key  is predefine object which can hold more than obe reducer
    reducer:{

        counter:CounterSlice
    }
})







//Create Action :to create action file
//Create Reducer:
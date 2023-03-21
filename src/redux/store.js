import { configureStore } from "@reduxjs/toolkit";
import { filterReducer } from "./slices/filter";
import { userReducer } from "./slices/user";


export const store = configureStore ({
    reducer:{
        user: userReducer,
        filter: filterReducer
    }
})
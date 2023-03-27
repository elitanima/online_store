import { configureStore } from "@reduxjs/toolkit";
import { getInitialValuesLocalStorage } from "./initialValues";
import { basketReducer } from "./slices/basket";
import { filterReducer } from "./slices/filter";
import { userReducer } from "./slices/user";


export const store = configureStore ({
    preloadedState: getInitialValuesLocalStorage(),
    reducer:{
        user: userReducer,
        filter: filterReducer,
        basket: basketReducer
    }
})

store.subscribe(() => {
    localStorage.setItem('reduxState', JSON.stringify(store.getState()))
  })
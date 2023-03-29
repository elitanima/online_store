import { createSlice } from "@reduxjs/toolkit";
import { initialFavoritesState } from "../initialValues";

export const favoritesSlice = createSlice({
    name: 'favorites',
    initialState: initialFavoritesState,
    reducers: {
      addToFavorites: (state, action) => {
        const productInBasket = state.find(el => el.id === action.payload)
        if(productInBasket) {
            productInBasket.count++
            return state
        }
        state.push({
            id: action.payload,
            count: 1
        })
        return state
      },  
      deleteProductInFavorites(state, action) {
        return state.filter((product) => action.payload !== product.id);
      },
    }
  })


export const { addToFavorites, removeAllCart, deleteProductInFavorites } = favoritesSlice.actions

export const favoritesReducer = favoritesSlice.reducer
import { createSlice } from "@reduxjs/toolkit";
import { initialBasketState } from "../initialValues";

export const basketSlice = createSlice({
    name: 'basket',
    initialState: initialBasketState,
    reducers: {
      addToBasket: (state, action) => {
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
      removeFromBasket: (state, action) => {
        // return action.payload
      },
      removeAllCart: () => {
        return initialBasketState
      }
    }
  })


export const { addToBasket, removeFromBasket, removeAllCart } = basketSlice.actions

export const basketReducer = basketSlice.reducer
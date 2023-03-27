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
      },
      changeCount(state, action) {
        // приходит id c value
        const idAndValue = action.payload;
        if (idAndValue.value < 1) {
          // удаляет продукт со страницы
          return state.filter((product) => idAndValue.id !== product.id);
        }
        for (let product of state) {
          if (product.id === idAndValue.id) {
            product.count = idAndValue.value;
          }
        }
      },
      deleteProductInBasket(state, action) {
        return state.filter((product) => action.payload !== product.id);
      },
    }
  })


export const { addToBasket, removeFromBasket, removeAllCart, changeCount, deleteProductInBasket } = basketSlice.actions

export const basketReducer = basketSlice.reducer
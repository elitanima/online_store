import { createSlice } from "@reduxjs/toolkit";
import { initialFilterState } from "../initialVelues";

export const filterSlice = createSlice({
    name: 'filter',
    initialState: initialFilterState,
    reducers: {
      changeSearchValue: (state, action) => {
        return action.payload
      },
    }
  })


export const { changeSearchValue } = filterSlice.actions

export const filterReducer = filterSlice.reducer
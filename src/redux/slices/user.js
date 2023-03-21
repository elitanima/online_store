import { createSlice } from "@reduxjs/toolkit";
import { initialUserState } from "../initialVelues";

export const userSlice = createSlice({
    name: 'user',
    initialState: initialUserState,
    reducers: {
      setUser: (state, action) => {
        state = action.payload
      },
      removeUser: (state) => {
        state = initialUserState
      }
    }
  })


export const { setUser, removeUser } = userSlice.actions

export const userReducer = userSlice.reducer
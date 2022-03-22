import { createSlice } from "@reduxjs/toolkit";

export interface UserState {
  isLoggedIn: boolean;
}

const initialState: UserState = {
  isLoggedIn: false,
};

export const userSlice = createSlice( {
    name: "user",
    initialState: {
        isLoggedIn: false
      },
      reducers: {
        logIn: (state) => {     
            state.isLoggedIn = true
        },
        
      }

})

export const { logIn } = userSlice.actions
export default userSlice.reducer

/** @return {{ authToken: string, id: string, name: string, email: string, password: string}} */
import { createSlice } from '@reduxjs/toolkit';
import { config } from '../config';

const initialState = config.initialState.user.account;

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state, action) => {           
            state.account = action.payload;
        },
        logout: (state) => {
            state.account = initialState;
        }
    }
});

export const {
    login,
    logout
} = userSlice.actions;

export default userSlice.reducer;

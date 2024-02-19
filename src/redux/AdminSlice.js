


import { createSlice } from '@reduxjs/toolkit';

export const adminSlice = createSlice({
    name: 'adminItems',

    initialState: {
        isAdmin: [],
    },
    reducers: {
        setIsAdmin: (state, action) => {
            state.isAdmin = action.payload;
        },
    },
    
});

export const getAdmin = state => state.adminItems.isAdmin;


export const { setIsAdmin } = adminSlice.actions;
export default adminSlice.reducer;

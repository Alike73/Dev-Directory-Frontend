

import { createSlice } from '@reduxjs/toolkit';

export const formSlice = createSlice({
    name: 'formItems',

    initialState: {
        isMyFormActive: false,
    },
    reducers: {
        setIsMyFormActive: (state, action) => {
            state.isMyFormActive = action.payload;
        },
    },
    
});

export const getMyFormActive = state => state.formItems.isMyFormActive;


export const { setIsMyFormActive } = formSlice.actions;
export default formSlice.reducer;
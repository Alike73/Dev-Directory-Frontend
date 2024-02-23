import { createSlice } from '@reduxjs/toolkit';

export const cssFilterSlice = createSlice({
    name: 'cssFilterItems',

    initialState: {
        selectedCssSetCategory: 'SET 1'
    },
    reducers: {
        filterCssSetCategory: (state, action) => {
            state.selectedCssSetCategory = action.payload;
        }
    },
});

export const getSelectedCssFilterCategory = state => state.cssFilterItems.selectedCssSetCategory;

export const { filterCssSetCategory } = cssFilterSlice.actions;
export default cssFilterSlice.reducer;



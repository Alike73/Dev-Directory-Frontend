import { createSlice } from '@reduxjs/toolkit';

export const searchBookSlice = createSlice({
    name: 'searchBookItems',

    initialState: {
        searchBookTerm: '',
    },
    reducers: {
        setSearchBookTerm: (state, action) => {
            state.searchBookTerm = action.payload;
        }
    },
});

export const getSearchBookTerm = state => state.searchBookItems.searchBookTerm;

export const { setSearchBookTerm } = searchBookSlice.actions;
export default searchBookSlice.reducer;
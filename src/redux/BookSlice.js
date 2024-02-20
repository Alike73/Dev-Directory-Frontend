import { createSlice } from '@reduxjs/toolkit';

export const bookSlice = createSlice({
    name: 'bookItems',

    initialState: {
        selectedBookCategory: 'ALL',
        editingBook: false,
    },
    reducers: {
        filterBookCategory: (state, action) => {
            state.selectedBookCategory = action.payload;
        },
        setEditingBook: (state, action) => {
            state.editingBook = action.payload;
        },
    },
});

export const getBookEditing = state => state.bookItems.editingBook;
export const getSelectedBookCategory = state => state.bookItems.selectedBookCategory;

export const { filterBookCategory, setEditingBook } = bookSlice.actions;
export default bookSlice.reducer;



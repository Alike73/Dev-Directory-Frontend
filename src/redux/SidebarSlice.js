import { createSlice } from '@reduxjs/toolkit';

export const sidebarSlice = createSlice({
    name: 'sidebarItems',

    initialState: {
        isOpen: false,
        isActiveIco: false,
        isActiveSidebar: false,
    },
    reducers: {
        setIsOpen: (state, action) => {
            state.isOpen = action.payload;
        },
        setActiveIco: (state, action) => {
            state.isActiveIco = action.payload;
        },
        setIsActiveSidebar: (state, action) => {
            state.isActiveSidebar = action.payload;
        },
    },
    
});

export const getIsOpen = state => state.sidebarItems.isOpen;
export const getActiveIcon = state => state.sidebarItems.isActiveIco;
export const getActiveSidebar = state => state.sidebarItems.isActiveSidebar;

export const { setActiveIco, setIsActiveSidebar, setIsOpen } = sidebarSlice.actions;
export default sidebarSlice.reducer;
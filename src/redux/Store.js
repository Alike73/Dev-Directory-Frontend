
import { configureStore } from '@reduxjs/toolkit';
import sidebarItems from './SidebarSlice';
import headerItems from './NavbarSlice';

export default configureStore({
    reducer: {
        sidebarItems: sidebarItems,
        headerItems: headerItems,
    }
})
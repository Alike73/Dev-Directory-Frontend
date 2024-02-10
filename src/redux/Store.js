
import { configureStore } from '@reduxjs/toolkit';
import sidebarItems from './SidebarSlice';
import headerItems from './NavbarSlice';
import formItems from './FormSlice';

export default configureStore({
    reducer: {
        sidebarItems: sidebarItems,
        headerItems: headerItems,
        formItems: formItems,
    }
})
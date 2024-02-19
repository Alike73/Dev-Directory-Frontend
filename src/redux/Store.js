
import { configureStore } from '@reduxjs/toolkit';
import sidebarItems from './SidebarSlice';
import headerItems from './NavbarSlice';
import formItems from './FormSlice';
import iframeLoaderItems from './IframeLoaderSlice';
import adminItems from './AdminSlice';

export default configureStore({
    reducer: {
        sidebarItems,
        headerItems,
        formItems,
        iframeLoaderItems,
        adminItems,
    }
});

import { configureStore } from '@reduxjs/toolkit';
import sidebarItems from './SidebarSlice';
import headerItems from './NavbarSlice';
import formItems from './FormSlice';
import iframeLoaderItems from './IframeLoaderSlice';

export default configureStore({
    reducer: {
        sidebarItems,
        headerItems,
        formItems,
        iframeLoaderItems,
    }
});
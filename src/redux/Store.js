
import { configureStore } from '@reduxjs/toolkit';
import sidebarItems from './SidebarSlice';
import headerItems from './NavbarSlice';
import formItems from './FormSlice';
import iframeLoaderItems from './IframeLoaderSlice';
import searchBookItems from './SearchBookSlice';
import bookItems from './BookSlice';

export default configureStore({
    reducer: {
        sidebarItems,
        headerItems,
        formItems,
        iframeLoaderItems,
        searchBookItems,
        bookItems,
    }
});
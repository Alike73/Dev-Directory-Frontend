import { createSlice } from '@reduxjs/toolkit';

export const iframeLoaderSlice = createSlice({
    name: 'iframeLoaderItems',

    initialState: {
        isShowLoader: false,
    },
    reducers: {
        setIsShowLoader: (state, action) => {
            state.isShowLoader = action.payload;
        },
    },
    
});

export const getMyIframeLoader = state => state.iframeLoaderItems.isShowLoader;


export const { setIsShowLoader } = iframeLoaderSlice.actions;
export default iframeLoaderSlice.reducer;
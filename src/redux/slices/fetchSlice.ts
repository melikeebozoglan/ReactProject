import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import appCore from "../../core/appCore";

interface FetchState {
    globalLoading: boolean;
    globalError: string | null;
};

const initialState: FetchState = {
    globalLoading: false,
    globalError: appCore.cookies.getCookie(appCore.cookies.COOKIE_KEYS.GLOBAL_ERROR) || null,
};

const fetchSlice = createSlice({
    name: "fetch",
    initialState,
    reducers: {
        setGlobalLoading: (state, action: PayloadAction<boolean>) => {
            state.globalLoading = action.payload;
            appCore.cookies.setCookie(
                appCore.cookies.COOKIE_KEYS.GLOBAL_LOADING,
                String(action.payload)
            );
        },
        setGlobalError: (state, action: PayloadAction<string | null>) => {
            state.globalError = action.payload;

            if (action.payload) {
                appCore.cookies.setCookie(
                    appCore.cookies.COOKIE_KEYS.GLOBAL_ERROR,
                    action.payload
                );
            } else {
                appCore.cookies.deleteCookie(
                    appCore.cookies.COOKIE_KEYS.GLOBAL_ERROR
                );
            }
        },

    },
    extraReducers: () => { },
});

export const { setGlobalLoading, setGlobalError } = fetchSlice.actions;
export default fetchSlice.reducer;
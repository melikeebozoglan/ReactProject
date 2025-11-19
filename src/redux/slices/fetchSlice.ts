import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface FetchState {
    globalLoading: boolean;
    globalError: string | null;
};

const initialState: FetchState = {
    globalLoading: false,
    globalError: null,
};

const fetchSlice = createSlice({
    name: "fetch",
    initialState,
    reducers: {
        setGlobalLoading(state, action: PayloadAction<boolean>) { state.globalLoading = action.payload; },
        setGlobalError(state, action: PayloadAction<string | null>) { state.globalError = action.payload; },

    },
    extraReducers: () => { },
});

export const { setGlobalLoading, setGlobalError } = fetchSlice.actions;
export default fetchSlice.reducer;
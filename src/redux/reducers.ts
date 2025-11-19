import { combineReducers } from "@reduxjs/toolkit";
import fetchReducer from "./slices/fetchSlice";

const rootReducer = combineReducers({
    fetch: fetchReducer,
});

export default rootReducer;
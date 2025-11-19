import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";
import { globalLoadingMiddleware } from "./middleware/globalLoadingMiddleware";

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(globalLoadingMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export { store };
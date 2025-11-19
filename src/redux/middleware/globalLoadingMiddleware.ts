import type { Middleware } from "@reduxjs/toolkit";
import { setGlobalError, setGlobalLoading } from "../slices/fetchSlice";

const globalLoadingMiddleware: Middleware = (store) => (next) => (action: any) => {
    const result = next(action);

    if (action.type.endsWith("/pending")) {
        store.dispatch(setGlobalLoading(true));
    }

    else if (action.type.endsWith("/fulfilled")) {
        store.dispatch(setGlobalLoading(false));
    }

    else if (action.type.endsWith("/rejected")) {
        store.dispatch(setGlobalLoading(false));
        store.dispatch(setGlobalError(action.error.message || "Beklenmeyen hata"));
    }

    return result;
};

export { globalLoadingMiddleware };
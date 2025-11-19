import axios from "axios";
import type { AxiosInstance, AxiosRequestConfig } from "axios";
import { setupInterceptors } from "./interceptors.ts";

const baseURL = import.meta.env.VITE_API_URL;
if (!baseURL) {
    console.warn("baseURL tanımlı değil. Fake servislerle çalışılıyor.");
}
const axiosConfig: AxiosRequestConfig = {
    baseURL: baseURL || "",
    timeout: 8000,
    timeoutErrorMessage: "The request timed out.",
    withCredentials: true,
};

const api: AxiosInstance = axios.create(axiosConfig);

setupInterceptors(api);

export default api;
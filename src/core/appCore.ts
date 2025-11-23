import apiRequest from "./api/request";
import services from "./services";
import axiosInstance from "./api/axiosInstance";
import * as cookies from "./cookies";

class AppCore {
    api = apiRequest;
    services = services;

    cookies = cookies;

    constructor() {
        const baseURL = import.meta.env.VITE_API_URL;

        if (baseURL) {
            axiosInstance.defaults.baseURL = baseURL;
        }
        else {
            console.warn("API_URL tanımlı değil. Fake servislerle devam ediliyor.");
        }
    }
}

const appCore = new AppCore();
export default appCore;
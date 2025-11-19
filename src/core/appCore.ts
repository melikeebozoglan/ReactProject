import apiRequest from "./api/request";
import services from "./services";
import axiosInstance from "./api/axiosInstance";

class AppCore {
    api = apiRequest;
    services = services;

    constructor() {
        const baseURL = import.meta.env.VITE_API_URL;

        if (baseURL) {
            axiosInstance.defaults.baseURL = baseURL;
        }
        else {
            console.warn("⚠️ VITE_API_URL tanımlı değil. Fake servislerle devam ediliyor.");
        }
    }
}

const appCore = new AppCore();
export default appCore;
import axiosInstance from "./axiosInstance";
import type { AxiosRequestConfig, AxiosError, Method } from "axios";

const isAxiosError = (error: any): error is AxiosError => {
    return error?.isAxiosError === true;
};

interface RequestProps {
    url: string;
    method?: Method;
    data?: any;
    config?: AxiosRequestConfig;
};

const request = async <T>({
    url,
    method = "GET",
    data,
    config = {},
}: RequestProps): Promise<T> => {
    try {
        const finalConfig: AxiosRequestConfig = {
            url,
            method,
            ...config,
        };

        if (method.toUpperCase() === "GET") {
            finalConfig.params = data;
        }
        else {
            finalConfig.data = data;
        }

        const response = await axiosInstance.request<T>(finalConfig);

        return response.data;
    } catch (error) {
        if (isAxiosError(error)) {
            const status = error.response?.status;

            console.error(
                `API Error → ${url} [${status}]`,
                error.response?.data || error.message
            );
        }

        throw error;
    }
};

export default request;
import type { AxiosInstance, AxiosError, AxiosResponse, InternalAxiosRequestConfig } from "axios";

// Token alma yöntemi
const getAccessToken = () => {
    try {
        return localStorage.getItem("access_token");
    } catch {
        return null;
    }
};

export const setupInterceptors = (axiosInstance: AxiosInstance) => {
    // REQUEST INTERCEPTOR — (Token ekleme)
    axiosInstance.interceptors.request.use(
        async (config: InternalAxiosRequestConfig) => {
            const token = getAccessToken();

            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }

            return config;
        },
        (error: AxiosError) => {
            return Promise.reject(error);
        }
    );

    // RESPONSE INTERCEPTOR — (Hata yönetimi)
    axiosInstance.interceptors.response.use(
        (response: AxiosResponse) => response,

        (error: AxiosError) => {
            if (error.response) {
                const status = error.response.status;

                // 401 — Unauthorized (token expired)
                if (status === 401) {
                    console.warn("401: Oturum süresi dolmuş olabilir.");
                    // Buraya istersen auto-refresh veya logout yazabilirsin
                }

                // 403 — Forbidden
                if (status === 403) {
                    console.warn("403: Bu işleme yetkin yok.");
                }

                // 500 — Server error
                if (status === 500) {
                    console.error("500 Sunucu hatası:", error.response.data);
                }
            }

            // Error'ı yukarı fırlatıyoruz → useFetch veya slice yakalayacak.
            return Promise.reject(error);
        }
    );
};
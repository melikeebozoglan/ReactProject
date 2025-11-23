import request from "../api/request";
import type { GetCityByCoordinatesResponse, GetWeatherByCoordinatesResponse } from "./interfaces";
import type { GetCityByCoordinatesParams, GetWeatherByCoordinatesPrams } from "./params";

// export const getTestData = async () => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve({ message: "Fake API çalıştı!", time: Date.now() });
//     }, 1000);
//   });
// };

// export const getError = async () => {
//   return new Promise((_, reject) => {
//     setTimeout(() => {
//       reject(new Error("Fake error!"));
//     }, 1000);
//   });
// };


export const getCityByCoordinates = async (params: GetCityByCoordinatesParams): Promise<GetCityByCoordinatesResponse> => {
    const url = `https://api.bigdatacloud.net/data/reverse-geocode-client`;

    const query = {
        latitude: params.latitude,
        longitude: params.longitude,
        localityLanguage: params.localityLanguage ?? "tr",
    };

    return request<GetCityByCoordinatesResponse>({
        url,
        method: "GET",
        data: query,
    });
};


export const getWeatherByCoordinates = async (params: GetWeatherByCoordinatesPrams): Promise<GetWeatherByCoordinatesResponse> => {
    const url = "https://api.open-meteo.com/v1/forecast";

    const query = {
        latitude: params.latitude,
        longitude: params.latitude,
        current_weather: params.current_weather ?? true,
        timezone: params.timezone ?? "auto",
        daily: [
            "temperature_2m_max",
            "temperature_2m_min",
            "weathercode",
            "precipitation_sum",
            "windspeed_10m_max"
        ].join(","),
    };

    return request({
        url,
        method: "GET",
        data: query,
    });
};
//endpoint’e gönderilecek query parametreleri

export interface GetCityByCoordinatesParams {
    latitude: number;
    longitude: number;
    localityLanguage?: string; // default: "tr"
};

export interface GetWeatherByCoordinatesPrams {
    latitude: number,
    longitude: number,
    current_weather: boolean,
    timezone: string, // default: "auto"
};
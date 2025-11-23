// gelen verinin tipi

export interface GetCityByCoordinatesResponse {
    latitude: number;
    longitude: number;
    continent: string;
    countryName: string;
    localityLanguageRequested: string;
    principalSubdivision: string;
    principalSubdivisionCode: string;
    city: string; // ilçe bu 
    continentCode: string;
};

export interface GetWeatherByCoordinatesResponse {
    latitude: number;
    longitude: number;
    generationtime_ms: number;
    utc_offset_seconds: number;
    timezone: string;
    timezone_abbreviation: string;
    elevation: number;
    current_weather_units: {
        time: string;
        interval: string;
        temperature: string;
        windspeed: string;
        winddirection: string;
        is_day: string;
        weathercode: string;
    },
    current_weather: {
        time: string;
        interval: number;
        temperature: number;
        windspeed: number;
        winddirection: number;
        is_day: number;
        weathercode: number;
    };
    daily_units: {
        time: string;
        temperature_2m_max: string;
        temperature_2m_min: string;
        weathercode: string;
        precipitation_sum: string;
        windspeed_10m_max: string;
    },
    daily: {
        time: string[];
        temperature_2m_max: number[];
        temperature_2m_min: number[];
        weathercode: number[];
        precipitation_sum: number[];
        windspeed_10m_max: number[];
    }
};
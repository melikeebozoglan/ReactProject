// import axiosInstance from '../api/axiosInstance';

import request from "../api/request";

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

export const getCityByCoordinates = async ({
    lat,
    lon,
}: {
    lat: number;
    lon: number;
}) => {
    const url = `https://api.bigdatacloud.net/data/reverse-geocode-client`;

    return request({
        url,
        method: "GET",
        data: {
            latitude: lat,
            longitude: lon,
            localityLanguage: "tr",
        },
    });
};


// import axiosInstance from '../api/axiosInstance';
// import request from '../api/request';

export const getTestData = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ message: "Fake API çalıştı!", time: Date.now() });
    }, 1000);
  });
};

export const getError = async () => {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject(new Error("Fake error!"));
    }, 1000);
  });
};

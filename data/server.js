import axios from "axios";

import { getAccessToken, getRefreshToken } from "@/app/(function)/getToken";

import { openGlobalModal } from "@/lib/modalEmitter";

export const url = "http://127.0.0.1:8000";

const apikey = "YOUR_API_KEY";

export const api = axios.create({
  baseURL: url + "/",
  withCredentials: false,
  headers: {
    apikey: apikey,
  },
});

api.interceptors.request.use(
  (config) => {
    const token = getAccessToken();

    if (token) {
      config.headers = config.headers || {};
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },

  (error) => {
    return Promise.reject(error);
  },
);

let isRefreshing = false;

let failedQueue = [];

export const processQueue = (error, token = null) => {
  failedQueue.forEach((promise) => {
    if (error) {
      promise.reject(error);
    } else {
      promise.resolve(token);
    }
  });

  failedQueue = [];
};

api.interceptors.response.use(
  (response) => {
    return response;
  },

  async (error) => {
    const originalRequest = error.config;

    if (
      error.response?.status !== 401 ||
      !originalRequest ||
      originalRequest._retry
    ) {
      return Promise.reject(error);
    }

    originalRequest._retry = true;

    if (isRefreshing) {
      return new Promise((resolve, reject) => {
        failedQueue.push({
          resolve,
          reject,
        });
      }).then((newAccessToken) => {
        originalRequest.headers = originalRequest.headers || {};

        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;

        return api(originalRequest);
      });
    }

    isRefreshing = true;

    const refreshToken = getRefreshToken();

    if (!refreshToken) {
      isRefreshing = false;

      openGlobalModal("404");

      return new Promise((resolve, reject) => {
        failedQueue.push({
          resolve,
          reject,
        });
      });
    }

    try {
      const response = await axios.post(
        `${url}/auth/refreshToken`,
        {
          refreshToken: refreshToken,
        },
        {
          headers: {
            apikey: apikey,
          },
        },
      );

      const newAccessToken = response.data.access_token;

      localStorage.setItem("access_token", newAccessToken);

      isRefreshing = false;

      processQueue(null, newAccessToken);

      originalRequest.headers = originalRequest.headers || {};

      originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;

      return api(originalRequest);
    } catch (refreshError) {
      isRefreshing = false;

      openGlobalModal("404");

      return new Promise((resolve, reject) => {
        failedQueue.push({
          resolve,
          reject,
        });
      }).then((newAccessToken) => {
        originalRequest.headers = originalRequest.headers || {};

        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;

        return api(originalRequest);
      });
    }
  },
);

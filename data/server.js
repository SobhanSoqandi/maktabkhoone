import axios from "axios";

import { getAccessToken, getRefreshToken } from "@/app/(function)/getToken";

import { openGlobalModal } from "@/lib/modalEmitter";

export const url = "http://127.0.0.1:8000";

export const apikey = "YOUR_API_KEY";

export const api = axios.create({
  baseURL: url + "/",
  withCredentials: false,
  headers: {
    apikey: apikey,
  },
});

const authListeners = new Set();

export const onAuthChange = (listener) => {
  authListeners.add(listener);
  return () => authListeners.delete(listener);
};

const emitAuthChange = (payload) => {
  authListeners.forEach((listener) => listener(payload));
};

const clearSession = () => {
  localStorage.removeItem("access_token");
  localStorage.removeItem("refresh_token");
  emitAuthChange({ loggedIn: false });
};

const AUTH_PATHS = ["auth/login", "auth/refreshToken"];

api.interceptors.request.use(
  (config) => {
    const token = getAccessToken();

    if (token) {
      config.headers = config.headers || {};
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error),
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
  (response) => response,

  async (error) => {
    const originalRequest = error.config;

    const isAuthCall = AUTH_PATHS.some((path) =>
      originalRequest?.url?.includes(path),
    );

    if (
      error.response?.status !== 401 ||
      !originalRequest ||
      originalRequest._retry ||
      isAuthCall
    ) {
      return Promise.reject(error);
    }

    originalRequest._retry = true;

    if (isRefreshing) {
      return new Promise((resolve, reject) => {
        failedQueue.push({ resolve, reject });
      }).then((newAccessToken) => {
        originalRequest.headers = originalRequest.headers || {};
        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
        return api(originalRequest);
      });
    }

    const refreshToken = getRefreshToken();

    if (!refreshToken) {
      clearSession();
      openGlobalModal("404");
      return Promise.reject(error);
    }

    isRefreshing = true;

    try {
      const { data } = await axios.post(
        `${url}/auth/refreshToken`,
        { refreshToken },
        { headers: { apikey } },
      );

      localStorage.setItem("access_token", data.access_token);

      emitAuthChange({ loggedIn: true, user: data.user });

      processQueue(null, data.access_token);

      originalRequest.headers = originalRequest.headers || {};
      originalRequest.headers.Authorization = `Bearer ${data.access_token}`;

      return api(originalRequest);
    } catch (refreshError) {
      processQueue(refreshError);
      clearSession();
      openGlobalModal("404");
      return Promise.reject(refreshError);
    } finally {
      isRefreshing = false;
    }
  },
);
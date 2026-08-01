import axios from "axios";
import { toast } from "react-hot-toast";
import { getAccessToken, getRefreshToken } from "@/app/(function)/getToken";
import { openGlobalModal } from "@/lib/modalEmitter";

export const url = "http://127.0.0.1:8000";
const apikey = "YOUR_API_KEY";
export const api = axios.create({
  baseURL: url + "/",
  withCredentials: false,
  headers: {
    apikey: apikey,
    // "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (config) => {
    const token = getAccessToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

api.interceptors.response.use(
  (response) => response,

  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const res = await axios.post(
          "http://127.0.0.1:8000/auth/refreshToken",
          {
            refreshToken: getRefreshToken(),
          },
        );

        const newAccess = res.data.access_token;

        localStorage.setItem("access_token", newAccess);

        originalRequest.headers = originalRequest.headers || {};

        originalRequest.headers.Authorization = `Bearer ${newAccess}`;

        return api(originalRequest);
      } catch (e) {
        console.log("before");
        openGlobalModal("404");
        console.log("after");
        return Promise.reject(e);
      }
    }

    return Promise.reject(error);
  },
);

// api.interceptors.response.use(
//   (response) => {
//     // if (response.config.method !== "get") {
//     //   toast.success("عملیات با موفقیت انجام شد");
//     // }
//     console.log(response);
//     return response;
//   },
//   (error) => {
//     console.log(error);
//     return Promise.reject(error);
//   },
// );

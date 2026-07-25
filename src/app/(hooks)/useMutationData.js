"use client";

import { useMutation } from "@tanstack/react-query";
import { api } from "../../../data/server";
import toast from "react-hot-toast";

export default function useMutationData(url, method, toastId, opt = {}) {
  const { mutate, isPending, data, isSuccess, isError, error } = useMutation({
    mutationFn: async ({ data, params, config } = {}) => {
      const response = await api[method.toLowerCase()](`/${url}`, data, {
        params,
        ...config,
      });

      return response;
    },

    onSuccess: (responseData) => {
      toast.success("عملیات با موفقیت انجام شد", { id: toastId });

      opt?.onSuccess?.(responseData);
    },

    onError: (error) => {
      const msgData = error?.response?.data?.message;

      let message = "خطایی رخ داده است";

      if (typeof msgData === "string") message = msgData;
      else if (typeof msgData === "object")
        message = Object.values(msgData).flat().join("\n");

      toast.error(message);

      opt?.onError?.(error);
    },

    ...opt,
  });

  return {
    mutate,
    isPending,
    isSuccess,
    data,
    isError,
    error,
  };
}

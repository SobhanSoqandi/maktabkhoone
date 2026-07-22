"use client";

import { useQuery } from "@tanstack/react-query";
import { api } from "../../../data/server";
import toast from "react-hot-toast";

export default function useGet(
  url,
  queryKey,
  { params, config = {}, ...options } = {},
) {
  return useQuery({
    queryKey: [queryKey, params],

    queryFn: async () => {
      const { data } = await api.get(`/${url}`, {
        params,
        ...config,
      });

      return data;
    },

    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 30,

    onError: (error) => {
      toast.error(error?.response?.data?.message || error.message);
      options?.onError?.(error);
    },

    onSuccess: (data) => {
      options?.onSuccess?.(data);
    },

    ...options,
  });
}

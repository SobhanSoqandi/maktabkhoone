import { base_url } from "../../../data/info";

export async function req(url, { params, ...options } = {}) {
  const query = params ? `?${new URLSearchParams(params).toString()}` : "";

  const response = await fetch(base_url + url + query, {
    ...options,
    cache: "no-store",
  });

  if (!response.ok) {
    const error = await response.text();

    console.log("Request URL:", base_url + url + query);
    console.log("Status:", response.status);
    console.log("Response:", error);

    throw new Error(`API Error: ${response.status}`);
  }

  return response.json();
}

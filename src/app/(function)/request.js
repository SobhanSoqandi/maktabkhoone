import { base_url } from "../../../data/info";

export async function req(url, options = {}) {
  const response = await fetch(base_url + url, options);
  if (!response.ok) {
    throw new Error("API Error");
  }
  return await response.json();
}

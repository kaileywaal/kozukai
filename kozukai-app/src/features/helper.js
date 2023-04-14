import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseQuery = fetchBaseQuery({
  baseUrl: "https://x8ki-letl-twmt.n7.xano.io/api:1Dk7YVFM",
  prepareHeaders: (headers) => {
    const token = localStorage.getItem("AUTH_TOKEN");

    // If we have a token set in state, let's assume that we should be passing it.
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

export const generateTempId = () => {
  const dateString = Date.now().toString(36);
  const randomness = Math.random().toString(36).substr(2);
  return dateString + randomness;
};

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
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

// Define a service using a base URL and expected endpoints
export const taskApi = createApi({
  reducerPath: "taskApi",
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    getTasks: builder.query({
      query: () => ({
        url: "/task",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetTasksQuery } = taskApi;

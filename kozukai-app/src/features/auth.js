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
export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    signup: builder.mutation({
      query: ({ email, password, name }) => ({
        url: "/auth/signup",
        method: "POST",
        body: { email: email, password: password, name: name },
      }),
    }),
    login: builder.mutation({
      query: ({ email, password }) => ({
        url: "/auth/login",
        method: "POST",
        body: { email: email, password: password },
      }),
      transformResponse: (response) => {
        localStorage.setItem("AUTH_TOKEN", response.authToken);
        return true;
      },
    }),
    getUser: builder.query({
      query: () => ({
        url: "/auth/me",
        method: "GET",
      }),
    }),
  }),
});

export const { useSignupMutation, useLoginMutation, useGetUserQuery } = authApi;

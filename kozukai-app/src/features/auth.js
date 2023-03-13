import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://x8ki-letl-twmt.n7.xano.io/api:1Dk7YVFM",
  }),
  endpoints: (builder) => ({
    signup: builder.mutation({
      query: ({ email, password, name }) => ({
        url: "/auth/signup",
        method: "POST",
        body: { email: email, password: password, name: name },
      }),
    }),
  }),
});

export const { useSignupMutation } = authApi;

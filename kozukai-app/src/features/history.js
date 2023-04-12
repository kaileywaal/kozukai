import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "./helper";

// Define a service using a base URL and expected endpoints
export const historyApi = createApi({
  reducerPath: "historyApi",
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    getHistory: builder.query({
      query: () => ({
        url: "/history",
        method: "GET",
      }),
      providesTags: ["History"],
    }),
    addHistory: builder.mutation({
      query: (id) => ({
        url: "/history",
        method: "POST",
        body: { task_id: id },
      }),
      invalidatesTags: ["History"],
    }),
  }),
});

export const { useAddHistoryMutation, useGetHistoryQuery } = historyApi;

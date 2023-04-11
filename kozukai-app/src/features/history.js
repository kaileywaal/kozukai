import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "./helper";

// Define a service using a base URL and expected endpoints
export const taskApi = createApi({
  reducerPath: "taskApi",
  baseQuery: baseQuery,
  endpoints: (builder) => ({}),
});

export const {} = taskApi;

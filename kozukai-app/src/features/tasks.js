import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "./helper";

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
      providesTags: ["Task"],
      transformResponse: (response) => {
        return response.sort((taskA, taskB) => {
          return taskB.created_at - taskA.created_at;
        });
      },
    }),
    addTask: builder.mutation({
      query: (task) => ({
        url: "/task",
        method: "POST",
        body: { title: task.title, value: task.value },
      }),
      invalidatesTags: ["Task"],
    }),
    updateTask: builder.mutation({
      query: (task) => ({
        url: `/task/${task.task_id}`,
        method: "POST",
        body: task,
      }),
    }),
    deleteTask: builder.mutation({
      query: (task) => ({
        url: `/task/${task.id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Task"],
    }),
  }),
});

export const {
  useGetTasksQuery,
  useAddTaskMutation,
  useUpdateTaskMutation,
  useDeleteTaskMutation,
} = taskApi;

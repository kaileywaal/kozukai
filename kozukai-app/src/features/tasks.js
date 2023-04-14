import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery, generateTempId } from "./helper";

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
          return taskA.created_at - taskB.created_at;
        });
      },
    }),
    addTask: builder.mutation({
      query: (task) => ({
        url: "/task",
        method: "POST",
        body: { title: task.title, value: task.value },
      }),
      async onQueryStarted({ task }, { dispatch, queryFulfilled }) {
        // add temporary data to the task list so the new task will show up immediately
        const patchResult = dispatch(
          taskApi.util.updateQueryData("getTasks", undefined, (taskList) => {
            const tempTask = { ...task, id: generateTempId() };
            taskList.push(tempTask);
          })
        );
        try {
          // once we get the result back, replace the tempTask with the actual data
          const newTask = await queryFulfilled;
          patchResult.undo();
          dispatch(
            taskApi.util.updateQueryData("getTasks", undefined, (taskList) => {
              taskList.unshift(newTask.data);
            })
          );
        } catch {
          patchResult.undo();
          // TODO: Add error handling here so that if the task is not added, users will know there was an issue
        }
      },
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
        method: "POST",
        body: { ...task, Active: "false" },
      }),
      //  invalidatesTags: ["Task"],
    }),
  }),
});

export const {
  useGetTasksQuery,
  useAddTaskMutation,
  useUpdateTaskMutation,
  useDeleteTaskMutation,
} = taskApi;

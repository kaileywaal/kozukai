import React from "react";
import { Navigate } from "react-router-dom";
import { useGetUserQuery } from "../../features/auth";

export default function PrivateRoute({ children }) {
  const { data, isLoading } = useGetUserQuery();

  return !isLoading && (data ? children : <Navigate replace to="/login" />);
}

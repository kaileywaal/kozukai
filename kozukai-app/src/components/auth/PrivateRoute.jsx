import React from "react";
import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children }) {
  const isLoggedIn = localStorage.getItem("AUTH_TOKEN").length > 0;

  return isLoggedIn ? children : <Navigate replace to="/login" />;
}

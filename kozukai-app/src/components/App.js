import React from "react";
import Signup from "./Signup";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import PrivateRoute from "./PrivateRoute";
import { Provider } from "react-redux";
import { store } from "../store";

function App() {
  return (
    <Provider store={store}>
      {/* <AuthProvider> */}
      <Container
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
        }}
      >
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <Routes>
            <Route
              exact
              path="/"
              element={<PrivateRoute>Hi it's working!</PrivateRoute>}
            />
            {/* <Route
                path="/update-profile"
                element={
                  <PrivateRoute>
                    <UpdateProfile />
                  </PrivateRoute>
                }
              /> */}
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </Container>
      {/* </AuthProvider> */}
    </Provider>
  );
}

export default App;

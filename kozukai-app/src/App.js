import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "@mui/material";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import { Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./contexts/store";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import PrivateRoute from "./components/auth/PrivateRoute";

function App() {
  let colorTheme = createTheme({
    palette: {
      primary: {
        light: "#FAF9FF",
        main: "#199BD3",
        dark: "#201E3A",
      },
      secondary: {
        light: "#FFFFFF",
        main: "#F8476F",
        dark: "#392F5A",
      },
    },
  });

  let theme = createTheme(colorTheme, {
    typography: {
      fontFamily: ["Poppins", "sans-serif"].join(","),
      h1: {
        color: colorTheme.palette.primary.dark,
        fontSize: "4rem",
        fontWeight: "600",
        fontFamily: ["Poppins", "sans-serif"].join(","),
      },
      h2: {
        color: colorTheme.palette.primary.dark,
        fontSize: "2rem",
        fontWeight: "300",
        fontFamily: ["Poppins", "sans-serif"].join(","),
      },
      h3: {
        color: colorTheme.palette.primary.dark,
        fontSize: "2rem",
        fontWeight: "400",
        fontFamily: ["Poppins", "sans-serif"].join(","),
      },
      h4: {
        color: colorTheme.palette.primary.main,
        fontSize: "1.6rem",
        fontWeight: "500",
        fontFamily: ["Poppins", "sans-serif"].join(","),
      },
      h5: {
        color: colorTheme.palette.primary.main,
        fontFamily: ["Poppins", "sans-serif"].join(","),
        fontSize: "1.4rem",
      },
      h6: {
        color: colorTheme.palette.secondary.dark,
        fontFamily: ["Poppins", "sans-serif"].join(","),
      },
      body1: {
        color: colorTheme.palette.primary.dark,
        fontFamily: ["Poppins", "sans-serif"].join(","),
      },
      caption: {
        color: colorTheme.palette.primary.dark,
        fontSize: "1rem",
        fontFamily: ["Poppins", "sans-serif"].join(","),
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: "40px",
            padding: "8px 1.4rem",
            fontSize: "0.8rem",
            fontFamily: ["Poppins", "sans-serif"].join(","),
            transition: "0.4s",
            "&.Mui-disabled": {
              backgroundColor: colorTheme.palette.primary.main,
              color: colorTheme.palette.secondary.light,
              opacity: 0.6,
            },
          },
          contained: {
            color: colorTheme.palette.primary.light,
          },
          outlined: {
            border: "2px solid",
            "&:hover": {
              border: `2px solid ${colorTheme.palette.primary.main}`,
              backgroundColor: colorTheme.palette.primary.main,
              color: colorTheme.palette.secondary.light,
            },
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: {
            color: colorTheme.palette.primary.dark,
            border: `1px solid ${colorTheme.palette.primary.dark}`,
          },
          contained: {
            backgroundColor: "hsla(346, 93%, 63%, 0.1)",
            color: colorTheme.palette.secondary.main,
            border: "none",
          },
        },
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  );
}

export default App;

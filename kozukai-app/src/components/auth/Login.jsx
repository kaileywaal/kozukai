import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  Box,
  Button,
  TextField,
  Typography,
  Container,
} from "@mui/material";
import { useLoginMutation } from "../../features/auth";
import AlertError from "../ui/errors/AlertError";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigation = useNavigate();
  const [login] = useLoginMutation();

  const handleSubmit = (e) => {
    e.preventDefault();

    login({ email, password })
      .unwrap()
      .then(() => {
        navigation("/");
      })
      .catch((error) => {
        setError(error);
      });
  };

  const handleEmailChange = (event) => {
    event.preventDefault();
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    event.preventDefault();
    setPassword(event.target.value);
  };

  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
        height: "100vh",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Card
          sx={{
            py: 4,
            px: 8,
            maxWidth: "600px",
          }}
        >
          <CardContent>
            <Typography variant="h1" sx={{ pb: 2 }}>
              Log In
            </Typography>
            {error && <AlertError errorMessage={error.data.message} />}
            <Box component="form" onSubmit={handleSubmit}>
              <TextField
                id="email"
                label="Email"
                type="email"
                required
                value={email}
                onChange={handleEmailChange}
                sx={{ width: "100%", marginBottom: "10px" }}
              />
              <TextField
                id="password"
                label="Password"
                type="password"
                required
                value={password}
                onChange={handlePasswordChange}
                sx={{ width: "100%", marginBottom: "10px" }}
              />
              <Button
                type="submit"
                variant="contained"
                sx={{ width: "100%", maxWidth: "175px", mt: 2 }}
              >
                Log In
              </Button>
            </Box>
          </CardContent>
        </Card>
        <Typography sx={{ pt: 1 }}>
          Need an account? <Link to="/signup">Sign Up</Link>
        </Typography>
      </Box>
    </Container>
  );
}

import React, { useState } from "react";
import { Typography, Alert, Card, Box, TextField, Button } from "@mui/material";
// import { useAuth } from "../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { CardContent } from "@mui/material";
import { useSignupMutation } from "../../features/auth";
import { useTheme } from "@mui/material";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [signup, { isLoading, isSuccess, isError }] = useSignupMutation();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigation = useNavigate();
  const theme = useTheme();

  async function handleSubmit(e) {
    e.preventDefault();

    if (password !== passwordConfirm) {
      return setError("Passwords do not match");
    }
    try {
      setError("");
      setLoading(true);
      signup({ email, password, name });
      navigation("/");
    } catch {
      setError("Failed to create an account");
    }

    setLoading(false);
  }

  const handleNameChange = (event) => {
    event.preventDefault();
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    event.preventDefault();
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    event.preventDefault();
    setPassword(event.target.value);
  };

  const handlePasswordConfirmChange = (event) => {
    event.preventDefault();
    setPasswordConfirm(event.target.value);
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Card
        sx={{
          backgroundColor: theme.palette.secondary.light,
          py: 4,
          px: 8,
          maxWidth: "600px",
        }}
      >
        <CardContent>
          <Typography variant="h1" sx={{ pb: 1 }}>
            Sign Up
          </Typography>
          {error && (
            <Alert severity="error" sx={{ marginBottom: "10px" }}>
              {error}
            </Alert>
          )}
          <Box component="form" onSubmit={handleSubmit}>
            <TextField
              id="name"
              label="Name"
              type="text"
              required
              value={name}
              onChange={handleNameChange}
              sx={{ width: "100%", marginBottom: "10px" }}
            />
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
            <TextField
              id="password-confirm"
              label="Confirm Password"
              type="password"
              required
              value={passwordConfirm}
              onChange={handlePasswordConfirmChange}
              sx={{ width: "100%", marginBottom: "10px" }}
            />
            <Button
              variant="contained"
              disabled={loading}
              type="submit"
              sx={{ width: "100%", maxWidth: "175px", mt: 2 }}
            >
              Sign Up
            </Button>
          </Box>
        </CardContent>
      </Card>
      <Typography sx={{ pt: 1 }}>
        Already have an account? <Link to="/login">Log in</Link>
      </Typography>
    </Box>
  );
}

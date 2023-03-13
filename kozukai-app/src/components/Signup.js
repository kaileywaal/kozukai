import React, { useState } from "react";
import { Typography, Alert, Card, Box, TextField, Button } from "@mui/material";
import { useAuth } from "../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { CardContent } from "@mui/material";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigation = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    if (password !== passwordConfirm) {
      return setError("Passwords do not match");
    }
    try {
      setError("");
      setLoading(true);
      await signup(email, password);
      navigation("/");
    } catch {
      setError("Failed to create an account");
    }

    setLoading(false);
  }

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
    <React.Fragment>
      <Card>
        <CardContent>
          <Typography variant="h1">Sign Up</Typography>
          {error && (
            <Alert severity="error" sx={{ marginBottom: "10px" }}>
              {error}
            </Alert>
          )}
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
              sx={{ width: "100%" }}
            >
              Sign Up
            </Button>
          </Box>
        </CardContent>
      </Card>
      <div>
        Already have an account? <Link to="/login">Log in</Link>
      </div>
    </React.Fragment>
  );
}

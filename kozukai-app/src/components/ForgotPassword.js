import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Link } from "react-router-dom";
import {
  Card,
  Box,
  TextField,
  Button,
  Alert,
  CardContent,
  Typography,
} from "@mui/material";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const { resetPassword } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleEmailChange = (event) => {
    event.preventDefault();
    setEmail(event.target.value);
  };

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setMessage("");
      setLoading(true);
      await resetPassword(email);
      setMessage("Check your inbox for further instructions");
    } catch {
      setError("Failed to reset password");
    }

    setLoading(false);
  }

  return (
    <React.Fragment>
      <Card>
        <CardContent>
          <Typography variant="h1">Password Reset</Typography>
          {error && (
            <Alert severity="danger" sx={{ mb: "10px" }}>
              {error}
            </Alert>
          )}
          {message && (
            <Alert severity="success" sx={{ mb: "10px" }}>
              {message}
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
            <Button disabled={loading} type="submit" variant="contained">
              Reset Password
            </Button>
          </Box>
        </CardContent>
      </Card>
      <Link to="/login">Log In</Link>
    </React.Fragment>
  );
}

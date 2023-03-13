import React, { useRef, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  Box,
  Button,
  Alert,
  TextField,
  Typography,
} from "@mui/material";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigation = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(email, password);
      navigation("/");
    } catch {
      setError("Failed to sign in");
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

  return (
    <React.Fragment>
      <Card>
        <CardContent>
          <Typography variant="h1">Log In</Typography>
          {error && <Alert variant="danger">{error}</Alert>}
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
              disabled={loading}
              type="submit"
              variant="contained"
              sx={{ width: "100%" }}
            >
              Log In
            </Button>
          </Box>
          <Link to="/forgot-password">Forgot Password?</Link>
        </CardContent>
      </Card>
      <Typography variant="body1">
        Need an account? <Link to="/signup">Sign Up</Link>
      </Typography>
    </React.Fragment>
  );
}

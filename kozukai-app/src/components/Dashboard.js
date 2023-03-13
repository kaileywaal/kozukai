import React, { useState } from "react";
import {
  Card,
  Button,
  Alert,
  Box,
  CardContent,
  Typography,
} from "@mui/material";
import { useAuth } from "../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";

export default function Dashboard() {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const navigation = useNavigate();

  async function handleLogout() {
    setError("");
    try {
      await logout();
      navigation("/login");
    } catch {
      setError("Failed to log out");
    }
  }

  return (
    <>
      <Card>
        <CardContent>
          <Typography variant="h1">Profile</Typography>
          {error && <Alert variant="danger">{error}</Alert>}
          <Typography variant="caption">Email: </Typography>
          <Typography variant="body1">{currentUser.email}</Typography>
          <Link to="/update-profile" className="btn btn-primary w-100 mt-3">
            Update Profile
          </Link>
        </CardContent>
      </Card>
      <Box>
        <Button variant="link" onClick={handleLogout}>
          Log Out
        </Button>
      </Box>
    </>
  );
}

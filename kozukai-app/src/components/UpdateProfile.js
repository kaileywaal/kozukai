import React, { useRef, useState } from "react";
import {
  Typography,
  Alert,
  Card,
  Box,
  TextField,
  Button,
  CardContent,
} from "@mui/material";
import { useAuth } from "../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";

export default function UpdateProfile() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const { currentUser, updatePassword, updateEmail } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigation = useNavigate();

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

  async function handleSubmit(e) {
    e.preventDefault();

    if (password !== passwordConfirm) {
      return setError("Passwords do not match");
    }

    const promises = [];
    setError("");
    setLoading(true);

    if (email != currentUser.email) {
      promises.push(updateEmail(email));
    }
    if (password) {
      promises.push(updatePassword(password));
    }

    Promise.all(promises)
      .then(() => {
        navigation("/");
      })
      .catch(() => {
        setError("Failed to update account");
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <React.Fragment>
      <Card>
        <CardContent>
          <h2 className="text-center mb-4">Update Profile</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Box component="form" onSubmit={handleSubmit}>
            <TextField
              id="email"
              label="Email"
              type="email"
              value={email}
              placeholder={currentUser.email}
              onChange={handleEmailChange}
              sx={{ width: "100%", marginBottom: "10px" }}
            />
            <TextField
              id="password"
              label="Password"
              type="password"
              value={password}
              onChange={handlePasswordChange}
              sx={{ width: "100%", marginBottom: "10px" }}
              placeholder="Leave blank to keep the same"
            />
            <TextField
              id="password-confirm"
              label="Confirm Password"
              type="password"
              value={passwordConfirm}
              onChange={handlePasswordConfirmChange}
              sx={{ width: "100%", marginBottom: "10px" }}
              placeholder="Leave blank to keep the same"
            />
            <Button disabled={loading} type="submit" variant="contained">
              Save Updates
            </Button>
          </Box>
        </CardContent>
      </Card>
      <Link to="/">Cancel</Link>
    </React.Fragment>
  );
}

import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  useTheme,
  Avatar,
  Menu,
  MenuItem,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { authApi, useGetUserQuery } from "../../features/auth";
import { useDispatch } from "react-redux";

export default function Navbar() {
  const theme = useTheme();
  const navigation = useNavigate();
  const { data } = useGetUserQuery();
  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    handleClose();
    localStorage.removeItem("AUTH_TOKEN");
    // clear all auth data from cache
    dispatch(authApi.util.resetApiState());
    navigation("/login");
  };

  console.log(data);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          backgroundColor: theme.palette.primary.light,
          borderBottom: `1px solid ${theme.palette.primary.dark}`,
        }}
      >
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            ☀️ Kozukai
          </Typography>
          {data && (
            <>
              <Avatar
                sx={{ backgroundColor: theme.palette.primary.main }}
                onClick={handleClick}
              />
              <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
                {/* <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem> */}
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </Menu>
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

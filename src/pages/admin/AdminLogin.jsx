import React from "react";

import {
  Avatar,
  Button,
  Container,
  IconButton,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import { CameraAlt as CameraAltIcon } from "@mui/icons-material";
import { VisuallyHidden } from "../../components/styles/StyledComponents";
import { useInputValidation } from "6pp";
import { Navigate } from "react-router-dom";

const isAdmin=false;

const AdminLogin = () => {
  const secretKey = useInputValidation("");

  const submitHandler = (e) => {
    e.preventDefault();
  };

  if(isAdmin) return <Navigate to={"/admin/dashboard"}/>

  return (
    <Container
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      component={"main"}
      maxWidth="xs"
    >
      <Paper
        elevation={3}
        sx={{
          padding: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h5">Admin Login</Typography>
        <form onSubmit={submitHandler}>
          <TextField
            required
            fullWidth
            type="password"
            label="Secret Key"
            margin="normal"
            variant="outlined"
            value={secretKey.value}
            onChange={secretKey.changeHandler}
          />

          <Button
            sx={{ marginTop: "1rem" }}
            variant="contained"
            color="primary"
            type="submit"
            fullWidth
          >
            Login
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default AdminLogin;

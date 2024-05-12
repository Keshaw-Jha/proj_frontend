import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import Typography from "@mui/material/Typography";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Copyright from "../../components/copyRight";
import { useLogInPage } from "./hooks/useLoginPage";
import { IconButton, InputAdornment } from "@mui/material";
import AdminHomePage from "../AdminHome";

export default function SignInSide() {
  const {
    handleSubmit,
    isUser,
    setIsUser,
    showPassword,
    setShowPassword,
    isLoggedIn,
    errors,
  } = useLogInPage();
  return !isLoggedIn ? (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <CssBaseline />
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: "URL(assets/logIn4.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundColor: (t) =>
            t.palette.mode === "light"
              ? t.palette.grey[50]
              : t.palette.grey[900],
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <Grid
        item
        xs={12}
        sm={8}
        md={5}
        component={Paper}
        elevation={6}
        square
        className=" ">
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}>
          <div className="w-[90px] md:w-[200px]">
            <img
              src="/assets/pravesh_logo1.2.png"
              alt=""
              className="md:w-1/2 mx-auto w-full"
            />
          </div>

          <Typography
            component="h1"
            variant="h5"
            className="!font-semibold !mt-2">
            {isUser ? "Sign In" : "Sign Up"}
          </Typography>

          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 1 }}>
            {!isUser && (
              <TextField
                margin="normal"
                color="secondary"
                required
                fullWidth
                id="name"
                label="Name"
                name="name"
                autoFocus
                error={!!errors.name}
                helperText={errors.name}
              />
            )}
            <TextField
              margin="normal"
              color="secondary"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoFocus
              error={!!errors.email}
              helperText={errors.email}
            />
            <TextField
              margin="normal"
              color="secondary"
              required
              fullWidth
              name="password"
              label="Password"
              error={!!errors.password}
              helperText={errors.password}
              type={showPassword ? "" : "password"}
              id="password"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => setShowPassword(!showPassword)}
                      edge="end">
                      {showPassword ? (
                        <VisibilityIcon color="primary" />
                      ) : (
                        <VisibilityIcon />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}>
              {isUser ? "Sign In" : "Sign Up"}
            </Button>
            {!isUser && (
              <Grid container className="flex justify-center">
                <Grid item>
                  <Button
                    style={{ textTransform: "none" }}
                    onClick={() => {
                      setIsUser(!isUser);
                    }}>
                    {isUser
                      ? "Don't have an account? Sign Up"
                      : "Already User Sign In"}
                  </Button>
                </Grid>
              </Grid>
            )}
            <Copyright sx={{ mt: 3 }} />
          </Box>
        </Box>
      </Grid>
    </Grid>
  ) : (
    <AdminHomePage />
  );
}

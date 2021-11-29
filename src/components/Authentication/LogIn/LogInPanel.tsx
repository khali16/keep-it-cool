import {
  Box,
  Container,
  TextField,
  Grid,
  Button,
  Link,
} from "@material-ui/core";
import AuthenticationTitleForm from "../AuthenticationTitleForm";
import FormRedirector from "../FormRedirector";
import LoginForm from "./LoginForm";

const LogInPanel = () => {
  return (
    <Container component="main" maxWidth="md">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <AuthenticationTitleForm authenticationTitle="Log In" />
        <Box sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <LoginForm />
          </Grid>
          <FormRedirector formTitle="Sign Up" />
        </Box>
      </Box>
    </Container>
  );
};

export default LogInPanel;

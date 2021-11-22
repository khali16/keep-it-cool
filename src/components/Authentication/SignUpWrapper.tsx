import {
  Box,
  Button,
  Container,
  Grid,
  Link,
  TextField,
  Typography,
} from "@material-ui/core";
import AuthenticationTitleForm from "./AuthenticationTitleForm";
import FormRedirector from "./FormRedirector";
import SignUpForm from "./SignUpForm";

const SignUpWrapper = () => {
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
        <AuthenticationTitleForm authenticationTitle="Sign Up" />
        <Box sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <SignUpForm />
          </Grid>
          <FormRedirector formTitle="Log In" />
        </Box>
      </Box>
    </Container>
  );
};

export default SignUpWrapper;

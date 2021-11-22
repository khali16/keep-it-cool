import {
  Box,
  Button,
  Container,
  Grid,
  Link,
  TextField,
  Typography,
} from "@material-ui/core";
import { useFormik } from "formik";
import { useAuth } from "../../Firebase/auth-context";
import { signUpSchema } from "../../Validation/ValidationSchemas";

export default function LogIn() {
  const { logIn } = useAuth();

  async function logInHandler(email: string, password: string) {
    try {
      await logIn(email, password);
      console.log("Logged In");
    } catch {
      alert("Something went wrong...");
    }
  }

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: signUpSchema,
    onSubmit: (values) => {
      console.log(values);
      logInHandler(values.email, values.password);
    },
  });

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
        <Typography component="h1" variant="h5">
          Log In
        </Typography>
        <Box sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <form id="logInForm" onSubmit={formik.handleSubmit}>
              <Grid item xs={12} style={{ width: "300px" }}>
                <TextField
                  required
                  fullWidth
                  id="logInEmail"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="logInPassword"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <Button type="submit" fullWidth form="logInForm">
                  Log In
                </Button>
              </Grid>
            </form>
          </Grid>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="#" variant="body2">
                Already have an account? Sign up
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}

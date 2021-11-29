import React from "react";
import { Grid, TextField, Button } from "@material-ui/core";
import { useFormik } from "formik";
import { useAuth } from "../../../Firebase/auth-context";
import { signUpSchema } from "../../../Validation/ValidationSchemas";

const LoginForm = () => {
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
  );
};

export default LoginForm;

import React from "react";
import { Grid, TextField, Button } from "@material-ui/core";
import { useFormik } from "formik";
import { signUpSchema } from "../../Validation/ValidationSchemas";
import { useAuth } from "../../Firebase/auth-context";

const SignUpForm = () => {
  const { signUp } = useAuth();
  const formik = useFormik({
    initialValues: {
      firstName: "",
      email: "",
      password: "",
    },
    validationSchema: signUpSchema,
    onSubmit: (values) => {
      console.log(values);
      signUp(values.firstName, values.email, values.password);
    },
  });

  return (
    <form id="signUpForm" onSubmit={formik.handleSubmit}>
      <Grid item xs={12} style={{ width: "300px" }}>
        <TextField
          autoComplete="given-name"
          name="firstName"
          required
          fullWidth
          id="firstName"
          label="First Name"
          autoFocus
          value={formik.values.firstName}
          onChange={formik.handleChange}
          error={formik.touched.firstName && Boolean(formik.errors.firstName)}
          helperText={formik.touched.firstName && formik.errors.firstName}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
      </Grid>
      <Grid item xs={12}>
        <Button type="submit" fullWidth form="signUpForm">
          Sign Up
        </Button>
      </Grid>
    </form>
  );
};

export default SignUpForm;

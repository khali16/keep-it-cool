import React from "react";
import { Grid, Link } from "@material-ui/core";

interface Props {
  formTitle: string;
}

const FormRedirector: React.FC<Props> = ({ formTitle }) => {
  return (
    <Grid container justifyContent="flex-end">
      <Grid item>//TO-DO Add form redirector</Grid>
    </Grid>
  );
};

export default FormRedirector;

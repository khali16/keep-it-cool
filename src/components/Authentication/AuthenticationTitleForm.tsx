import React from "react";
import { Typography } from "@material-ui/core";

interface Props {
  authenticationTitle: string;
}

const AuthenticationTitleForm: React.FC<Props> = ({ authenticationTitle }) => {
  return (
    <Typography component="h1" variant="h5">
      {authenticationTitle}
    </Typography>
  );
};

export default AuthenticationTitleForm;

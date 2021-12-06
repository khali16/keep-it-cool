import { CardContent, Typography } from "@material-ui/core";
import Card from "@mui/material/Card";
import { Box } from "@mui/system";
import { useStyles } from "../Styles/MaterialStyle";

const EmptyBarLayout = () => {
  const classes = useStyles();

  return (
    <Box className={classes.emptyStatisticsBox}>
      <Card>
        <CardContent>
          <Typography variant="h5" align="center">
            It looks like, you haven't drink any fluid in this week...
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default EmptyBarLayout;

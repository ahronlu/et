import React from "react";
import { Card, CardContent, CardHeader, Typography } from "@material-ui/core";
import { Doughnut } from "react-chartjs-2";

import useStyles from "./styles";

const Details = () => {
  const classes = useStyles();
  return (
    <Card className={classes.income}>
      <CardHeader title="income" />
      <CardContent>
        <Typography variant="h5">50$</Typography>
        <Doughnut data="" />
      </CardContent>
    </Card>
  );
};

export default Details;

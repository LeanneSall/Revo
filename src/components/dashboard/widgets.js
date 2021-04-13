import React from "react";
import { Container, Paper, makeStyles, Grid } from "@material-ui/core";
import { ImportantDevices } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {},

  container: {
    display: "flex",
    flexDirection: "row",
  },

  inner: {},
}));

export default function Widgets() {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Grid container>
        {[...Array(10)].map((x, i) => (
          <Grid item xs={6}>
            <Paper key={i} elevation={3} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

import React, { useState } from "react";
import { Container, Paper, Grid, Fab, Link } from "@material-ui/core";

import FadeMenu from "./popUpFab";

// const useStyles = makeStyles((theme) => ({
//   root: {},

//   container: {

//   },

//   inner: {},
// }));

export default function Widgets() {
  const [inputList, setInputList] = useState([]);

  const addPaper = (id) =>
    setInputList(
      inputList.concat(
        <Grid item xs={12} s={6} m={6} lg={3}>
          <Paper
            key={id}
            elevation={3}
            id="paper"
            onClick={() => alert("hello")}
          ></Paper>
        </Grid>
      )
    );
  return (
    <>
      <Container id="container">
        <Grid container>{inputList}</Grid>
        <FadeMenu onAddPaper={addPaper} />
      </Container>
    </>
  );
}

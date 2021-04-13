import React, { useState } from "react";
import { Container, Paper, Grid, Fab, Link } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

// const useStyles = makeStyles((theme) => ({
//   root: {},

//   container: {

//   },

//   inner: {},
// }));

export default function Widgets() {
  const [inputList, setInputList] = useState([]);

  const addPaper = () => {
    setInputList(
      inputList.concat(
        <Grid item xs={12} s={6} m={6} lg={3}>
          <Paper
            key={inputList.length}
            elevation={3}
            onClick={() => alert("hello")}
          ></Paper>
        </Grid>
      )
    );
  };

  return (
    <>
      <Fab id="stick" onClick={() => addPaper()}>
        <AddIcon />
      </Fab>
      <Container id="container">
        <Grid container>{inputList}</Grid>
      </Container>
    </>
  );
}

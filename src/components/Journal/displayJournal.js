import { Container, Paper, Typography, Button } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { useAuth } from "../../hooks/useAuth";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";

const useStyles = makeStyles({
  root: {
    padding: "1rem 5rem 3rem 3rem",
    marginBottom: "5rem",
  },
});

export default function DisplayJournal() {
  const [getData, setGetData] = useState([]);
  const history = useHistory();
  const classes = useStyles();
  const { currentUser } = useAuth();
  const uid = currentUser.uid;

  useEffect(async () => {
    await axios
      .get(`http://localhost:5000/api/journal/currentjournals/${uid}`)
      .then((i) => {
        setGetData(i.data);
      });
    console.log(getData);
  }, []);

  const del = async (i) => {
    await axios.delete(`http://localhost:5000/api/journal/${i}`).then((io) => {
      console.log(io);
    });
  };

  return (
    <Container id="outerCon">
      <Button onClick={() => history.push("/newj")}>Add New Journal?</Button>
      <Container id="innerCon">
        {getData ? (
          getData.map((prop) => {
            return (
              <Paper className={classes.root}>
                <Typography variant="h5">{prop.date}</Typography>
                <Typography variant="h4">{prop.title}</Typography>
                <Typography variant="body1">{prop.entry}</Typography>
                <Button onClick={(e) => del(prop._id)}>Delete?</Button>
              </Paper>
            );
          })
        ) : (
          <h3>Add a new Entry!</h3>
        )}
      </Container>
    </Container>
  );
}

// <Paper>
//           <form noValidate autoComplete="off">
//             <TextField id="standard-basic" label="Title" />
//             <TextField
//               id="outlined-basic"
//               label="Journal Entry"
//               variant="outlined"
//             />
//           </form>
//         </Paper>

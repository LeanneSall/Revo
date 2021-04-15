import { Container, Paper, Typography } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { useAuth } from "../../hooks/useAuth";
import axios from "axios";

export default function DisplayJournal() {
  const [getData, setGetData] = useState([]);

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

  return (
    <Container>
      <Container>
        {getData ? (
          getData.map((prop) => {
            return (
              <Paper>
                <Typography variant="h5">{prop.date}</Typography>
                <Typography variant="h5">{prop.title}</Typography>
                <Typography variant="body1">{prop.entry}</Typography>
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

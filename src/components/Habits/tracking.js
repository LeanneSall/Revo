import axios from "axios";
import React, { useState, useEffect } from "react";
import { Button, Modal, Container, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import TrackBar from "./trackBar";
import { useAuth } from "../../hooks/useAuth";
import Nav from "../../components/dashboard/nav";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    padding: "1rem 3rem 3rem 3rem",
    marginBottom: "5rem",
  },
});

export default function Tracking() {
  const [getData, setGetData] = useState([]);
  const { currentUser } = useAuth();
  const uid = currentUser.uid;
  const history = useHistory();
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  useEffect(async () => {
    await axios
      .get(`http://localhost:5000/api/habit/currentHabits/${uid}`)
      .then((i) => {
        setGetData(i.data);
      });
  }, []);

  const del = async (i) => {
    await axios.delete(`http://localhost:5000/api/habit/${i}`).then((io) => {
      console.log(io);
    });
  };

  return (
    <>
      <Container id="containerTrack">
        <Nav i={"Your Habits"} />
        <Button onClick={() => history.push("/new")}>Add New Habit?</Button>
        {getData.map((props) => {
          return (
            <Container id="containerIn">
              <Paper className={classes.root}>
                <Typography variant="h3">{props.name}</Typography>
                <Typography variant="h4">{`You have been consistant for ${props.consistantNum} days`}</Typography>
                <TrackBar
                  i={props.consistantNum == 0 ? 0 : props.consistantNum}
                />
                <Button>Completed Today?</Button>
                <Button onClick={(e) => del(props._id)}>Delete?</Button>
              </Paper>
            </Container>
          );
        })}
      </Container>
    </>
  );
}

import axios from "axios";
import React, { useState, useEffect } from "react";
import {
  Button,
  CircularProgress,
  Container,
  Paper,
  Typography,
} from "@material-ui/core";
import TrackBar from "./trackBar";
import { useAuth } from "../../hooks/useAuth";
import TrackSpecific from "./trackSpecific";
import Nav from "../../components/dashboard/nav";

export default function Tracking() {
  const [getData, setGetData] = useState([]);
  const { currentUser } = useAuth();
  const uid = currentUser.uid;
  useEffect(async () => {
    await axios
      .get(`http://localhost:5000/api/habit/currentHabits/${uid}`)
      .then((i) => {
        setGetData(i.data);
      });
    console.log(getData);
  }, []);

  return (
    <>
      <Container>
        <Nav />
        {getData.map((props) => {
          return (
            <Container>
              <Paper>
                <Typography variant="h3">{props.name}</Typography>
                <Typography variant="h4">{`You have been consistant for ${props.consistantNum} days`}</Typography>
                <TrackBar
                  i={props.consistantNum == 0 ? 0 : props.consistantNum / 60}
                />
                <Button>Completed Today?</Button>
              </Paper>
            </Container>
          );
        })}
      </Container>
    </>
  );
}

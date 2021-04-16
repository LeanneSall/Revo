import React, { useState } from "react";
import {
  Paper,
  TextField,
  FormControl,
  Button,
  InputLabel,
  Input,
  FormHelperText,
  Container,
} from "@material-ui/core";
import Nav from "../../components/dashboard/nav";
import axios from "axios";
import { useAuth } from "../../hooks/useAuth";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    textAlign: "center",
    padding: "1rem 5rem 3rem 3rem",
    marginBottom: "5rem",
    textAlign: "center",
  },
  name: {
    marginBottom: "2rem",
  },
});

export default function TrackSpecific() {
  const classes = useStyles();
  const { currentUser } = useAuth();
  const [text, setText] = useState("");
  const history = useHistory();
  const uid = currentUser.uid;

  const submit = () => {
    axios
      .post(`http://localhost:5000/api/habit/`, {
        userId: uid,
        widgetId: 1,
        name: text,
        consistancy: "every day",
      })
      .then(() => {
        console.log("success");
      });
    history.push("/habits");
  };

  const handleChange = (e) => setText(e.target.value);

  return (
    <Container>
      <Nav i={"Your Habits"} />
      <Paper className={classes.root}>
        <FormControl onSubmit={submit}>
          <TextField
            required
            className={classes.name}
            id="standard-required"
            label="habit name"
            onChange={(e) => handleChange(e)}
          />
          <Button type="submit">Submit</Button>
        </FormControl>
      </Paper>
    </Container>
  );
}

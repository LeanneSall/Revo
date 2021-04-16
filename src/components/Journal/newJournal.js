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
  TextareaAutosize,
} from "@material-ui/core";
import Nav from "../../components/dashboard/nav";
import axios from "axios";
import { useAuth } from "../../hooks/useAuth";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  paper: {
    height: "40vh",
  },
  root: {
    padding: "1rem 5rem 3rem 3rem",
    marginBottom: "5rem",
    textAlign: "center",
  },
  entry: {
    width: "100%",
    height: "20vh",
    marginTop: "2rem",
    paddingBottom: "8rem",
  },
  form: {
    width: "100%",
    height: "50vh",
  },
});

export default function NewJournal() {
  const classes = useStyles();
  const { currentUser } = useAuth();
  const [text, setText] = useState("");
  const [title, setTitle] = useState("");
  const history = useHistory();
  const uid = currentUser.uid;

  const submit = () => {
    axios
      .post(`http://localhost:5000/api/journal/`, {
        userId: uid,
        widgetId: 3,
        title: title,
        entry: text,
      })
      .then(() => {
        console.log("success");
      });
    history.push("/journal");
  };

  const handleChange = (e) => setText(e.target.value);
  const handleTitleChange = (e) => setTitle(e.target.value);

  return (
    <Container>
      <Nav i={"New Journal"} />
      <Paper className={classes.paper}>
        <Container className={classes.root}>
          <FormControl onSubmit={submit} className={classes.form}>
            <TextField
              required
              id="standard-required"
              label="Title"
              onChange={(e) => handleTitleChange(e)}
            />
            <TextField
              required
              multiline="true"
              rows="20"
              id="standard-required"
              className={classes.entry}
              label="Entry"
              variant="outlined"
              onChange={(e) => handleChange(e)}
            />
            <Button type="submit">Submit</Button>
          </FormControl>
        </Container>
      </Paper>
    </Container>
  );
}

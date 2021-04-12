import { Button, Container, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import firebase from "firebase/app";
import React from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import "firebase/auth";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
  },
}));

const Dashboard = () => {
  const history = useHistory();
  const { signOut } = useAuth();
  const logout = () => {
    signOut();
    history.push("/");
  };

  const classes = useStyles();
  return (
    <>
      <h1>Dashboard</h1>
      <Container className={classes.root}>
        //link to widgets as papers
        <Paper elevation={3} />
        <Paper elevation={3} />
        <Paper elevation={3} />
        //have bottom nav as android or hamburger for ios
      </Container>
      //Add add button at bottom of screen to add more widgets
    </>
  );
};

export default Dashboard;

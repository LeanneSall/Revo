import { Button, Container, Paper, Fab } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import firebase from "firebase/app";
import React from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import "firebase/auth";
import Widgets from "../components/dashboard/widgets";
import ButtonAppBar from "../components/dashboard/nav";
import BottomNav from "../components/dashboard/bottomNav";
import { isMobile } from "react-device-detect";

const useStyles = makeStyles({
  root: {
    //height: "90vh",
  },
});

const Dashboard = () => {
  const history = useHistory();
  const { signOut } = useAuth();
  const logout = () => {
    signOut();
    history.push("/");
  };

  const topNav = () => {
    if (!isMobile) {
      return <ButtonAppBar />;
    }
  };

  const bottomNav = () => {
    if (isMobile) {
      return <BottomNav />;
    }
  };

  const bottomHeader = () => {
    if (isMobile) {
      return <h1 className="header">Dashboard</h1>;
    }
  };

  const classes = useStyles();

  return (
    <>
      {topNav()}
      {bottomHeader()}
      <Container className={classes.root}>
        <Widgets />
      </Container>
      {bottomNav()}
    </>
  );
};

export default Dashboard;

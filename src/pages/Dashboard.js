import { Button, Container, Paper, Fab } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import "firebase/auth";
import Widgets from "../components/dashboard/widgets";
import Nav from "../components/dashboard/nav";
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
      return <Nav i={"Dashboard"} />;
    }
  };

  const classes = useStyles();

  return (
    <>
      <Container className={classes.root}>
        {topNav()}
        <Widgets />
      </Container>
    </>
  );
};

export default Dashboard;

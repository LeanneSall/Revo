import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Container } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

export default function Nav({ i }) {
  const { signOut } = useAuth();
  const history = useHistory();

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await signOut();
      history.push("/landing");
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <AppBar id="nav-bar" position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>

        <Button onClick={(e) => history.push("/dashboard")}>
          <h1>{i}</h1>
        </Button>

        <Button color="inherit" onClick={(e) => onSubmit(e)}>
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  );
}

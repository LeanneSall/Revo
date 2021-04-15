import React, { useState, useEffect } from "react";
import { Container, Paper, Grid, Fab, Link } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Fade from "@material-ui/core/Fade";
import AddIcon from "@material-ui/icons/Add";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useAuth } from "../../hooks/useAuth";
import { useHistory } from "react-router-dom";
import axios from "axios";

export default function GrabWidget({ i }) {
  const [inputList, setInputList] = useState([]);
  const [style, setStyle] = useState({});
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [loading, setLoading] = useState(true);
  const open = Boolean(anchorEl);
  const [link, setLink] = useState("");
  const { currentUser } = useAuth();
  const [grabData, setGrabData] = useState({});
  const uid = currentUser.uid;
  const [widgets, setWidgets] = useState([]);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const history = useHistory();

  const whichClick = (i) => {
    switch (i) {
      case 1:
        return "/habits";

      case 2:
        return "/journal";

      case 3:
        return "/water";
    }
  };

  return (
    <Grid item xs={12} s={6} m={6} lg={3}>
      <Paper
        key={i}
        elevation={3}
        id={"hi" + i.toString()}
        onClick={() => history.push(whichClick(i))}
      ></Paper>
    </Grid>
  );
}

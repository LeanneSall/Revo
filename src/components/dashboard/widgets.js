import React, { useState, useEffect } from "react";
import { Container, Grid, Fab } from "@material-ui/core";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Fade from "@material-ui/core/Fade";
import AddIcon from "@material-ui/icons/Add";
import CircularProgress from "@material-ui/core/CircularProgress";
import RemoveCircleIcon from "@material-ui/icons/RemoveCircle";
import { useAuth } from "../../hooks/useAuth";
import axios from "axios";
import GrabWidget from "./grabWidget";

export default function Widgets() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const [pickId, setPickId] = useState();
  const { currentUser } = useAuth();
  const uid = currentUser.uid;
  const [widgets, setWidgets] = useState([]);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  useEffect(async () => {
    await axios.get(`http://localhost:5000/api/user/${uid}`).then((res) => {
      setWidgets(res.data.widgetIds);
    });
  }, [widgets]);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const check = async (id) => {
    try {
      axios
        .post(`http://localhost:5000/api/user/${uid}/dashboard/${id}`)
        .then((res) => {
          console.log(res);
        });
    } catch (e) {
      return;
    }
  };

  if (!widgets) {
    return <CircularProgress />;
  }

  return (
    <>
      <Container id="container">
        <Grid container>
          {widgets.map((props) => (
            <GrabWidget i={props} key={1 + props} />
          ))}
        </Grid>
        <div>
          <Fab
            aria-controls="fade-menu"
            aria-haspopup="true"
            onClick={handleClick}
          >
            <AddIcon />
          </Fab>
          <Menu
            id="fade-menu"
            anchorEl={anchorEl}
            keepMounted
            open={open}
            onClose={handleClose}
            TransitionComponent={Fade}
          >
            <MenuItem onClick={(e) => check(1)}>Habit Tracker</MenuItem>
            <MenuItem onClick={(e) => check(2)}>Water Tracker</MenuItem>
            <MenuItem onClick={(e) => check(3)}>Journal</MenuItem>
          </Menu>
        </div>
      </Container>
    </>
  );
}

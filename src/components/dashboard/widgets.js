import React, { useState, useEffect } from "react";
import { Container, Paper, Grid, Fab, Link } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Fade from "@material-ui/core/Fade";
import AddIcon from "@material-ui/icons/Add";
import CircularProgress from "@material-ui/core/CircularProgress";

// const useStyles = makeStyles((theme) => ({
//   root: {},

//   container: {

//   },

//   inner: {},
// }));

export default function Widgets() {
  const [inputList, setInputList] = useState([]);
  const [style, setStyle] = useState({});
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [loading, setLoading] = useState(false);
  const open = Boolean(anchorEl);
  const [pickId, setPickId] = useState();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const check = async (id) => {
    setPickId(id);
    switch (id) {
      case 1:
        {
          setInputList(
            inputList.concat(
              <Grid item xs={12} s={6} m={6} lg={3}>
                <Paper
                  key={inputList.length}
                  elevation={3}
                  id="paper"
                  onClick={() => alert("hello")}
                ></Paper>
              </Grid>
            )
          );
        }
        break;
      case 2:
        {
          setInputList(
            inputList.concat(
              <Grid item xs={12} s={6} m={6} lg={3}>
                <Paper
                  key={inputList.length}
                  elevation={3}
                  id="water"
                  onClick={() => alert("hello")}
                ></Paper>
              </Grid>
            )
          );
        }
        break;
      case 3: {
        setInputList(
          inputList.concat(
            <Grid item xs={12} s={6} m={6} lg={3}>
              <Paper
                key={inputList.length}
                elevation={3}
                id="journal"
                onClick={() => alert("hello")}
              ></Paper>
            </Grid>
          )
        );
      }
      default:
        return;
    }
  };
  const ohNo = (id) => {
    setPickId(id);
    check(id);
  };

  // const addPaper = async () => {
  //   setInputList(
  //     inputList.concat(
  //       <Grid item xs={12} s={6} m={6} lg={3}>
  //         <Paper
  //           key={inputList.length}
  //           elevation={3}
  //           id='paper'
  //           onClick={() => alert("hello")}
  //         ></Paper>
  //       </Grid>
  //     )
  //   );
  //   setLoading(false);
  //   loadOrAdd();
  // };

  // const loadOrAdd = async () => {
  //   if (loading) {
  //     return <CircularProgress />;
  //   }
  // };

  return (
    <>
      <Container id="container">
        <Grid container>{inputList}</Grid>
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
            <MenuItem onClick={(e) => ohNo(1)}>Habit Tracker</MenuItem>
            <MenuItem onClick={(e) => ohNo(2)}>Water Tracker</MenuItem>
            <MenuItem onClick={(e) => ohNo(3)}>Journal</MenuItem>
          </Menu>
        </div>
      </Container>
    </>
  );
}

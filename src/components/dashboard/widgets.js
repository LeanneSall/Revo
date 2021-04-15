import React, { useState, useEffect } from "react";
import { Container, Paper, Grid, Fab, Link } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Fade from "@material-ui/core/Fade";
import AddIcon from "@material-ui/icons/Add";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useAddWidget } from "../../hooks/addWidget";
import { useAuth } from "../../hooks/useAuth";
import axios from "axios";
import GrabWidget from "./grabWidget";

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
  const [loading, setLoading] = useState(true);
  const open = Boolean(anchorEl);
  const [pickId, setPickId] = useState();
  const { currentUser } = useAuth();
  const [grabData, setGrabData] = useState({});
  const uid = currentUser.uid;
  const [widgets, setWidgets] = useState([]);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  useEffect(async () => {
    await axios.get(`http://localhost:5000/api/user/${uid}`).then((res) => {
      setWidgets(res.data.widgetIds);
    });
  }, []);
  // const getData = async (widgets) => {
  //   await widgets.forEach((widget) => {
  //     console.log(widget);
  //     switch (widget) {
  //       case 1:
  //         {
  //           setInputList(
  //             inputList.concat(
  //               <Grid item xs={12} s={6} m={6} lg={3}>
  //                 <Paper
  //                   key={inputList.length}
  //                   elevation={3}
  //                   id="paper"
  //                   onClick={() => alert("hello")}
  //                 ></Paper>
  //               </Grid>
  //             )
  //           );
  //         }
  //         break;
  //       case 2:
  //         {
  //           setInputList(
  //             inputList.concat(
  //               <Grid item xs={12} s={6} m={6} lg={3}>
  //                 <Paper
  //                   key={inputList.length}
  //                   elevation={3}
  //                   id="water"
  //                   onClick={() => alert("hello")}
  //                 ></Paper>
  //               </Grid>
  //             )
  //           );
  //         }
  //         break;
  //       case 3: {
  //         setInputList(
  //           inputList.concat(
  //             <Grid item xs={12} s={6} m={6} lg={3}>
  //               <Paper
  //                 key={inputList.length}
  //                 elevation={3}
  //                 id="journal"
  //                 onClick={() => alert("hello")}
  //               ></Paper>
  //             </Grid>
  //           )
  //         );
  //       }
  //       default:
  //         return;
  //     }
  //   });
  // };

  // const displayUserWidgets = () => {};

  const handleClose = () => {
    setAnchorEl(null);
  };

  const check = async (id) => {
    setPickId(id);
  };
  const ohNo = (id) => {
    setPickId(id);
  };

  // const loadInput = (loading) => {
  //   if (loading) {
  //     return <CircularProgress color="secondary" />;
  //   } else {
  //     return ;
  //   }
  // };

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
  if (!widgets) {
    return <CircularProgress />;
  }

  return (
    <>
      <Container id="container">
        <Grid container>
          {widgets.map((props) => (
            <GrabWidget i={props} />
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
            <MenuItem onClick={(e) => ohNo(1)}>Habit Tracker</MenuItem>
            <MenuItem onClick={(e) => ohNo(2)}>Water Tracker</MenuItem>
            <MenuItem onClick={(e) => ohNo(3)}>Journal</MenuItem>
          </Menu>
        </div>
      </Container>
    </>
  );
}

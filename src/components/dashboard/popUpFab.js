import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Fade from "@material-ui/core/Fade";
import { Fab } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import AddPaper from "./addPaper";

export default function FadeMenu({ onAddPaper }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Fab aria-controls="fade-menu" aria-haspopup="true" onClick={handleClick}>
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
        <MenuItem onClick={() => onAddPaper(1)}>Habit Tracker</MenuItem>
        <MenuItem onClick={() => onAddPaper(2)}>Water Tracker</MenuItem>
        <MenuItem onClick={() => onAddPaper(3)}>Journal</MenuItem>
      </Menu>
    </div>
  );
}

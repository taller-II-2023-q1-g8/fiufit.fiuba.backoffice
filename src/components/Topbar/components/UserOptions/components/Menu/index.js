import { signOutContext } from "../../../../../../App";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import ExitToAppRoundedIcon from "@material-ui/icons/ExitToAppRounded";
import MenuItem from "@material-ui/core/MenuItem";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import React, { useState, useEffect, Fragment, useContext } from "react";

const Menu = ({ anchor, onClose }) => {
  const [open, handleOpenState] = useState(false);
  const logout = useContext(signOutContext);

  useEffect(() => {
    handleOpenState(anchor);
  }, [anchor]);

  const popperStyle = {
    display: "flex",
    placeContent: "flex-end",
    width: "100%",
  };
  const paperStyle = { backgroundColor: "var(--white)" };
  const menuItemStyle = {
    marginRight: "10px",
    gap: "10px",
    color: "var(--main)",
  };

  return (
    <Fragment>
      {anchor && (
        <Popper anchorEl={anchor} open={open} style={popperStyle}>
          <Paper style={paperStyle}>
            <ClickAwayListener onClickAway={onClose}>
              <MenuItem onClick={logout} style={menuItemStyle}>
                <ExitToAppRoundedIcon />
                Salir
              </MenuItem>
            </ClickAwayListener>
          </Paper>
        </Popper>
      )}
    </Fragment>
  );
};

export default Menu;

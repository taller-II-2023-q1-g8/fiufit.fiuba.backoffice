import Arrow from "@material-ui/icons/KeyboardArrowDown";
import React, { Fragment, useContext, useState } from "react";
import Menu from "./components/Menu";

import styles from "./styles.module.scss";
import { userContext } from "../../../../App";

const UserOptions = () => {
  const userData = useContext(userContext);
  const userName = userData.email.split("@")[0];
  const [anchor, setAnchor] = useState();

  const openMenu = (event) => setAnchor(event.currentTarget);
  const closeMenu = () => setAnchor();

  return (
    <Fragment>
      <div onClick={openMenu} className={styles.container}>
        <span className={styles.avatar}>{userName.charAt(0)}</span>
        <div className={styles.title}>{userName}</div>
        <Arrow className={`${styles.arrow} ${!!anchor && styles.menuOpened}`} />
      </div>
      <Menu anchor={anchor} onClose={closeMenu} />
    </Fragment>
  );
};

export default UserOptions;

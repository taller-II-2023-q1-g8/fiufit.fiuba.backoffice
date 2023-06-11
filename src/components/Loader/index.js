import React from "react";
import styles from "./styles.module.scss";

const Loader = () => {
  console.log("loader!");
  return (
    <div className={styles.container}>
      <div className={styles.loader}></div>
    </div>
  );
};

export default Loader;

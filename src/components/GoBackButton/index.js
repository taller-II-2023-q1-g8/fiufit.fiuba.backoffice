import React from "react";
import styles from "./styles.module.scss";

export const GoBackButton = () => {
  const goBack = () => {
    window.history.go(-1);
  };

  return (
    <div className={styles.goBackContainer}>
      <button className={styles.goBackButton} onClick={goBack}>
        ⬅ Volver
      </button>
    </div>
  );
};

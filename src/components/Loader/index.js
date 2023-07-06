import React, { useEffect } from "react";
import styles from "./styles.module.scss";

const Loader = () => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      alert("Time out!");
      window.location.href = "/";
    }, 20000);

    return () => clearTimeout(timeout); // Limpiar el temporizador si el componente se desmonta antes de que finalice el tiempo
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.loader}></div>
    </div>
  );
};

export default Loader;

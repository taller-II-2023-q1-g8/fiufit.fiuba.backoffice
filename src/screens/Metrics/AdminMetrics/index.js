import React, { Fragment } from "react";
import styles from "./styles.module.scss";

const AdminMetrics = ({ usersData, adminsData }) => (
  <Fragment>
    <h2 style={{ alignSelf: "flex-start" }}>Estadísticas de Administradores</h2>
    <h3 style={{ alignSelf: "flex-start" }}>Cantidad</h3>
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Cantidad de administradores</th>
          <th>Ratio Administrador / Usuarios</th>
        </tr>
      </thead>
      <tr>
        <td>{adminsData.length}</td>
        <td>1 cada {usersData.length / adminsData.length}</td>
      </tr>
    </table>
  </Fragment>
);

export default AdminMetrics;

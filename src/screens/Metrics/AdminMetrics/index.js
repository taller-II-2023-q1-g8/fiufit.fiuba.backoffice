import React, { Fragment } from "react";

const AdminMetrics = ({ usersData, adminsData }) => (
  <Fragment>
    <h2 style={{ alignSelf: "flex-start" }}>Estadísticas de Administradores</h2>
    <h3 style={{ alignSelf: "flex-start" }}>Cantidad</h3>
    <table className="PlansTable">
      <tr>
        <td>Cantidad</td>
        <td>{adminsData.length}</td>
      </tr>
      <tr>
        <td>Ratio administrador / usuarios</td>
        <td>1 cada {usersData.length / adminsData.length}</td>
      </tr>
    </table>
  </Fragment>
);

export default AdminMetrics;

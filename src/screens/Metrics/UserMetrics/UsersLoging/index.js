import React, { Fragment } from "react";
import { createDoughnutChart } from "../utils";

const UsersLogingMetrics = ({ usersData }) => {
  console.log({ usersData });
  const totalUsers = usersData.length;
  const federatedUsers = usersData.filter((user) => user.is_federated).length;

  createDoughnutChart(
    "KindOfLoginChart",
    ["Federado", "Noo federado"],
    [federatedUsers, totalUsers - federatedUsers]
  );

  return (
    <Fragment>
      <h3 style={{ alignSelf: "flex-start" }}>Logeo de usuarios</h3>
      <div
        style={{
          display: "flex",
          gap: 50,
          height: 120,
          placeItems: "center",
        }}
      >
        <table className="PlansTable">
          <thead>
            <tr>
              <th> </th>
              <th>Login federado</th>
              <th>Login normal</th>
            </tr>
          </thead>
          <tr>
            <td>Cantidad de usuarios</td>
            <td>{federatedUsers}</td>
            <td>{totalUsers - federatedUsers}</td>
          </tr>
        </table>
        <canvas style={{ padding: 10 }} id="KindOfLoginChart" />
      </div>
    </Fragment>
  );
};

export default UsersLogingMetrics;

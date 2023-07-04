import React, { Fragment, useEffect } from "react";
import { createDoughnutChart } from "../utils";

const UsersLogingMetrics = ({ usersData }) => {
  const totalUsers = usersData.length;
  const federatedUsers = usersData.filter((user) => user.is_federated).length;

  const isLessThanADay = (date) => {
    var today = new Date();
    var dateToCalculate = new Date("2023-06-14T20:23:35.239878+00:00");

    const diff = today - dateToCalculate;
    const dayDiff = Math.floor(diff / (1000 * 60 * 60 * 24));

    return dayDiff <= 1;
  };

  const recentlyCreatedUsersData = usersData.filter((user) =>
    isLessThanADay(user.created_at)
  );
  const recentlyCreatedUsers = recentlyCreatedUsersData.length;
  const federatedRecentlyCreatedUsers = recentlyCreatedUsersData.filter(
    (user) => user.is_federated
  ).length;

  useEffect(() => {
    createDoughnutChart(
      "firstChart",
      ["Fed", "No fed"],
      [
        federatedRecentlyCreatedUsers,
        recentlyCreatedUsers - federatedRecentlyCreatedUsers,
      ]
    );

    createDoughnutChart(
      "KindOfLoginChart",
      ["Federado", "No federado"],
      [federatedUsers, totalUsers - federatedUsers]
    );
  }, [
    federatedUsers,
    totalUsers,
    federatedRecentlyCreatedUsers,
    recentlyCreatedUsers,
  ]);

  return (
    <Fragment>
      <h3 style={{ alignSelf: "flex-start" }}>Registro federado</h3>
      <div
        style={{
          display: "flex",
          gap: 10,
          placeItems: "center",
        }}
      >
        <table className="PlansTable">
          <thead>
            <tr>
              <th> </th>
              <th>Federado</th>
              <th>No federado</th>
            </tr>
          </thead>
          <tr>
            <td>Nuevos usuarios</td>
            <td>{federatedRecentlyCreatedUsers}</td>
            <td>{recentlyCreatedUsers - federatedRecentlyCreatedUsers}</td>
          </tr>
        </table>
        <div style={{ height: 120, marginRight: 10 }}>
          <canvas id="firstChart" />
        </div>
        <table className="PlansTable">
          <thead>
            <tr>
              <th> </th>
              <th>Federado</th>
              <th>No federado</th>
            </tr>
          </thead>
          <tr>
            <td>Usuarios</td>
            <td>{federatedUsers}</td>
            <td>{totalUsers - federatedUsers}</td>
          </tr>
        </table>
        <div style={{ height: 120 }}>
          <canvas id="KindOfLoginChart" />
        </div>
      </div>
    </Fragment>
  );
};

export default UsersLogingMetrics;

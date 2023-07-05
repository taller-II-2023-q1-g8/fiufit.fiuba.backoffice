import React, { Fragment, useEffect } from "react";
import { createDoughnutChart, isLessThanADay } from "../utils";
import styles from "./styles.module.scss";

const UsersLogingMetrics = ({ usersData }) => {
  const totalUsers = usersData.length;
  const federatedUsers = usersData.filter((user) => user.is_federated).length;

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
      ["Federado", "No federado"],
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
      <div style={{ display: "flex", gap: 70 }}>
        <div className={styles.tableContainer}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th> </th>
                <th>Federado</th>
                <th>No federado</th>
              </tr>
            </thead>
            <tr>
              <td>Nuevos</td>
              <td>{federatedRecentlyCreatedUsers}</td>
              <td>{recentlyCreatedUsers - federatedRecentlyCreatedUsers}</td>
            </tr>
          </table>
          <div className={styles.canvas}>
            <canvas id="firstChart" />
          </div>
        </div>
        <div className={styles.tableContainer}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th> </th>
                <th>Federado</th>
                <th>No federado</th>
              </tr>
            </thead>
            <tr>
              <td>Totales</td>
              <td>{federatedUsers}</td>
              <td>{totalUsers - federatedUsers}</td>
            </tr>
          </table>
          <div className={styles.canvas}>
            <canvas id="KindOfLoginChart" />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default UsersLogingMetrics;

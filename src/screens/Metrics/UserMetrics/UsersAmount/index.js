import React, { Fragment, useEffect } from "react";
import { createDoughnutChart, isLessThanADay } from "../utils";
import styles from "./styles.module.scss";

const UsersAmountMetrics = ({ allUsers, allAthletes, allPlans }) => {
  const trainerIds = allAthletes.map((athlete) => athlete.id);
  const trainerIdsWithPlans = [
    ...new Set(allPlans.map((plan) => plan.trainer_id)),
  ];
  const athletesWithPlans = trainerIds.filter((trainerId) =>
    trainerIdsWithPlans.includes(trainerId)
  ).length;
  const amountOfAthletes = allUsers.length;

  const recentlyLoggedUsersData = allUsers.filter(
    (user) => user.last_login && isLessThanADay(user.last_login)
  );
  const recentlyLoggedUsers = recentlyLoggedUsersData.length;

  useEffect(() => {
    createDoughnutChart(
      "usersAmountChart",
      ["Atletas", "Entrenadores"],
      [amountOfAthletes - athletesWithPlans, athletesWithPlans]
    );

    createDoughnutChart(
      "recentlyLoggedUsers",
      ["Recientemente", "Hace tiempo"],
      [recentlyLoggedUsers, amountOfAthletes - recentlyLoggedUsers]
    );
  }, [amountOfAthletes, athletesWithPlans, recentlyLoggedUsers]);

  return (
    <Fragment>
      <h3 style={{ alignSelf: "flex-start" }}>Cantidad de usuarios</h3>
      <div style={{ display: "flex", gap: 100 }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div className={styles.tableContainer}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Entrenadores</th>
                  <th>Atletas</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tr>
                <td>{athletesWithPlans}</td>
                <td>{amountOfAthletes - athletesWithPlans}</td>
                <td>{amountOfAthletes}</td>
              </tr>
            </table>
            <div className={styles.canvas}>
              <canvas id="usersAmountChart" />
            </div>
          </div>
          <p style={{ alignSelf: "flex-start" }}>
            *Entrenador: Usuario que tiene planes creados.
          </p>
        </div>
        <div className={styles.tableContainer}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Logueados recientemente</th>
                <th>Hace tiempo</th>
              </tr>
            </thead>
            <tr>
              <td>{recentlyLoggedUsers}</td>
              <td>{amountOfAthletes - recentlyLoggedUsers}</td>
            </tr>
          </table>
          <div className={styles.canvas}>
            <canvas id="recentlyLoggedUsers" />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default UsersAmountMetrics;

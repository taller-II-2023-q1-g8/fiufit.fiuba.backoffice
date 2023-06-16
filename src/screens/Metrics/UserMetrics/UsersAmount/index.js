import React, { Fragment, useEffect } from "react";
import { createDoughnutChart } from "../utils";

const UsersAmountMetrics = ({ allUsers, allAthletes, allPlans }) => {
  const trainerIds = allAthletes.map((athlete) => athlete.id);
  const trainerIdsWithPlans = [
    ...new Set(allPlans.map((plan) => plan.trainer_id)),
  ];
  const athletesWithPlans = trainerIds.filter((trainerId) =>
    trainerIdsWithPlans.includes(trainerId)
  ).length;
  const amountOfAthletes = allUsers.length;

  const isLessThanADay = (date) => {
    var today = new Date();
    var dateToCalculate = new Date("2023-06-14T20:23:35.239878+00:00");

    const diff = today - dateToCalculate;
    const dayDiff = Math.floor(diff / (1000 * 60 * 60 * 24));
    return dayDiff <= 1;
  };

  const recentlyLoggedUsersData = allUsers.filter(
    (user) => user.last_login && isLessThanADay(user.last_login)
  );
  const recentlyLoggedUsers = recentlyLoggedUsersData.length;

  useEffect(() => {
    createDoughnutChart(
      "usersAmountChart",
      ["Entrenador", "Atleta"],
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
      <div style={{ display: "flex", gap: 50 }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              placeItems: "center",
              gap: 10,
            }}
          >
            <table className="PlansTable">
              <tr>
                <td>Cantidad de Entrenadores</td>
                <td>{athletesWithPlans}</td>
              </tr>
              <tr>
                <td>Cantidad de Atletas</td>
                <td>{amountOfAthletes - athletesWithPlans}</td>
              </tr>
              <tr className="TotalAmount">
                <td>Cantidad total</td>
                <td>{amountOfAthletes}</td>
              </tr>
            </table>
            <div style={{ height: 120, marginRight: 10 }}>
              <canvas id="usersAmountChart" />
            </div>
          </div>
          <p style={{ alignSelf: "flex-start" }}>
            *Entrenador: Usuario que tiene planes creados.
          </p>
        </div>
        <div
          style={{
            display: "flex",
            placeItems: "center",
            gap: 10,
            height: "fit-content",
          }}
        >
          <table className="PlansTable">
            <tr>
              <td>Usuarios logueados recientemente</td>
              <td>{recentlyLoggedUsers}</td>
            </tr>
          </table>
          <div style={{ height: 120, marginRight: 10 }}>
            <canvas id="recentlyLoggedUsers" />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default UsersAmountMetrics;

import React, { Fragment } from "react";
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

    createDoughnutChart(
      "usersAmountChart",
      ["Entrenador", "Atleta"],
      [amountOfAthletes, athletesWithPlans]
    );

  return (
    <Fragment>
      <h3 style={{ alignSelf: "flex-start" }}>Cantidad de usuarios</h3>
      <div
        style={{
          display: "flex",
          placeItems: "center",
          height: 120,
          gap: 50,
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
        <canvas
          style={{
            padding: 10,
          }}
          id="usersAmountChart"
        />
      </div>
      <p style={{ alignSelf: "flex-start" }}>
        Entrenador: Usuario que tiene planes creados.
      </p>
    </Fragment>
  );
};

export default UsersAmountMetrics;

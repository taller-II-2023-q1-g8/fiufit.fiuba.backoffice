import React, { Fragment } from "react";
import UsersLogingMetrics from "./UsersLoging";
import UsersInformationMetrics from "./UsersInformation";
import UsersAmountMetrics from "./UsersAmount";

const UserMetrics = ({ athletesData, plansData, usersData }) => {
  return (
    <Fragment>
      <h2 style={{ alignSelf: "flex-start" }}>Estadísticas de Usuarios</h2>
      <UsersAmountMetrics
        allUsers={usersData}
        allPlans={plansData}
        allAthletes={athletesData}
      />
      <UsersLogingMetrics usersData={usersData} />
      <UsersInformationMetrics usersData={usersData} />
    </Fragment>
  );
};

export default UserMetrics;

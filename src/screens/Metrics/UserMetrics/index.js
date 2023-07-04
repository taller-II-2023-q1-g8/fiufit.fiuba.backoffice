import React, { Fragment } from "react";
import UsersLogingMetrics from "./UsersLoging";
import UsersInformationMetrics from "./UsersInformation";
import UsersAmountMetrics from "./UsersAmount";

const UserMetrics = ({ athletesData, plansData, usersData }) => {
  // console.log("estoy en el index general");
  // console.log({ athletesData, plansData, usersData });
  const shouldShowUsersAmountMetrics =
    Array.isArray(usersData) &&
    Array.isArray(plansData) &&
    Array.isArray(athletesData);

  return (
    <Fragment>
      <h2 style={{ alignSelf: "flex-start" }}>Estadísticas de Usuarios</h2>
      {shouldShowUsersAmountMetrics && (
        <UsersAmountMetrics
          allUsers={usersData}
          allPlans={plansData}
          allAthletes={athletesData}
        />
      )}
      {Array.isArray(usersData) && (
        <Fragment>
          <UsersLogingMetrics usersData={usersData} />
          <UsersInformationMetrics usersData={usersData} />
        </Fragment>
      )}
    </Fragment>
  );
};

export default UserMetrics;

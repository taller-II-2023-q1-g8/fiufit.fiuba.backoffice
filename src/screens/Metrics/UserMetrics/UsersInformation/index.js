import React, { Fragment } from "react";
import { average } from "./utils";
import { getAge } from "./utils";
import { createDoughnutChart } from "../utils";

const UsersInformationMetrics = ({ usersData }) => {
  const ages = usersData
    .map((user) => (user.birth_date ? getAge(user.birth_date) : 0))
    .filter((age) => age > 0);
  const averageAge = ~~average(ages);
  const minAge = Math.min.apply(Math, ages);
  const maxAge = Math.max.apply(Math, ages);
  const heights = usersData
    .map((user) => user.height_in_cm || 0)
    .filter((height) => height > 0);
  const weights = usersData
    .map((user) => user.weight_in_kg || 0)
    .filter((weight) => weight > 0);

  const averageHeight = ~~average(heights);
  const averageWeight = ~~average(weights);

  const genders = { female: 0, male: 0, other: 0 };
  usersData
    .map((user) => user.gender)
    .forEach((gender) => {
      if (gender === "female") genders["female"] = genders["female"] + 1;
      if (gender === "male") genders["male"] = genders["male"] + 1;
      if (gender === "other" || gender === "")
        genders["other"] = genders["other"] + 1;
    });

  createDoughnutChart(
    "genderChart",
    ["Femenino", "Masculino", "Otro"],
    [genders.female, genders.male, genders.other]
  );

  return (
    <Fragment>
      <h3 style={{ alignSelf: "flex-start" }}>Información de usuarios</h3>
      <div style={{ display: "flex", gap: 50 }}>
        <div
          style={{
            display: "flex",
            placeItems: "center",
            placeSelf: "flex-start",
          }}
        >
          <table className="PlansTable">
            <thead>
              <th>Edad</th>
              <th> </th>
            </thead>
            <tr>
              <td>Promedio</td>
              <td>{averageAge}</td>
            </tr>
            <tr>
              <td>Mínimo</td>
              <td>{minAge}</td>
            </tr>
            <tr>
              <td>Máximo</td>
              <td>{maxAge}</td>
            </tr>
          </table>
        </div>
        <div
          style={{
            display: "flex",
            placeItems: "center",
            placeSelf: "flex-start",
          }}
        >
          <table className="PlansTable">
            <thead>
              <th>Contextura</th>
              <th> </th>
            </thead>
            <tr>
              <td>Altura promedio (cm)</td>
              <td>{averageHeight}</td>
            </tr>
            <tr>
              <td>Peso promedio (kg)</td>
              <td>{averageWeight}</td>
            </tr>
          </table>
        </div>
        <div
          style={{
            display: "flex",
            placeItems: "center",
            height: 130,
            gap: 10,
            placeSelf: "flex-start",
          }}
        >
          <table className="PlansTable">
            <thead>
              <th>Género</th>
              <th></th>
            </thead>
            <tr>
              <td>Femenino</td>
              <td>{genders.female}</td>
            </tr>
            <tr>
              <td>Masculino</td>
              <td>{genders.male}</td>
            </tr>
            <tr>
              <td>Otro</td>
              <td>{genders.other}</td>
            </tr>
          </table>
          <canvas
            style={{
              padding: 10,
            }}
            id="genderChart"
          />
        </div>
      </div>
    </Fragment>
  );
};

export default UsersInformationMetrics;

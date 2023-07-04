import React, { Fragment, useEffect } from "react";
import { average } from "./utils";
import { getAge } from "./utils";
import { createDoughnutChart } from "../utils";
import styles from "./styles.module.scss";

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
      if (gender === "female") genders["female"] += 1;
      if (gender === "male") genders["male"] += 1;
      if (gender === "other" || gender === "") genders["other"] += 1;
    });

  useEffect(() => {
    createDoughnutChart(
      "genderChart",
      ["Femenino", "Masculino", "Otro"],
      [genders.female, genders.male, genders.other]
    );
  }, [genders.female, genders.male, genders.other]);

  return (
    <Fragment>
      <h3 style={{ alignSelf: "flex-start" }}>Información de usuarios</h3>
      <div
        style={{
          display: "flex",
          gap: 50,
          "flex-wrap": "wrap",
          "justify-content": "space-around",
        }}
      >
        <div className={styles.tableContainer}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th> </th>
                <th>Promedio</th>
                <th>Mínima</th>
                <th>Máxima</th>
              </tr>
            </thead>
            <tr>
              <td>Edad</td>
              <td>{averageAge}</td>
              <td>{minAge}</td>
              <td>{maxAge}</td>
            </tr>
          </table>
        </div>
        <div className={styles.tableContainer}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Altura promedio (cm)</th>
                <th>Peso promedio (kg)</th>
              </tr>
            </thead>
            <tr>
              <td>{averageHeight}</td>
              <td>{averageWeight}</td>
            </tr>
          </table>
        </div>
        <div className={styles.tableContainer}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Femenino</th>
                <th>Masculino</th>
                <th>Otro</th>
              </tr>
            </thead>
            <tr>
              <td>{genders.female}</td>
              <td>{genders.male}</td>
              <td>{genders.other}</td>
            </tr>
          </table>
          <div className={styles.canvas}>
            <canvas id="genderChart" />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default UsersInformationMetrics;

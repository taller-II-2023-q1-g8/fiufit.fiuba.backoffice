import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { fetchUserByUsername } from "../../../requests";
import { useParams } from "react-router-dom";
import Loader from "../../../components/Loader";

const UserDetails = () => {
  const params = useParams();
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const userData = (await fetchUserByUsername(params.username)).message;
      setUserData(userData);
    }
    fetchData();
  }, []);

  const {
    birth_date,
    email,
    firstname,
    gender,
    height_in_cm,
    is_admin,
    is_federated,
    lastname,
    phone_number,
    username,
    weight_in_kg,
  } = userData;

  return Object.keys(userData).length > 0 ? (
    <div className={{ alignSelf: "flex-start" }}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Username</th>
            <th>Email</th>
            <th>Nombre</th>
          </tr>
        </thead>
        <tr key={username}>
          <td>{username || "-"}</td>
          <td>{email || "-"}</td>
          <td>{(firstname || "") + " " + (lastname || "")}</td>
        </tr>
      </table>
      <h3>Información adicional</h3>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Cumpleaños</th>
            <th>Género</th>
            <th>Altura (cm)</th>
            <th>Peso (kg)</th>
            <th>Telefono</th>
            <th>Es admin</th>
            <th>Es federado</th>
          </tr>
        </thead>
        <tr>
          <td>{birth_date || "-"}</td>
          <td>{gender === "female" ? "Femenino" : "Masculino"}</td>
          <td>{height_in_cm || "-"}</td>
          <td>{weight_in_kg || "-"}</td>
          <td>{phone_number || "-"}</td>
          <td>{is_admin ? "Sí" : "No"}</td>
          <td>{is_federated ? "Sí" : "No"}</td>
        </tr>
      </table>
    </div>
  ) : (
    <Loader />
  );
};

export default UserDetails;

import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { fetchUserByUsername } from "../../../requests";
import { useParams } from "react-router-dom";
import Loader from "../../../components/Loader";

const UserDetailsScreen = () => {
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

  console.log(userData.length);
  console.log({ userData });
  return Object.keys(userData).length > 0 ? (
    // <div className={styles.userDetails}>
    //   <div className={styles.userDetailsRow}>
    //     <label>Username:</label>
    //     <span>{username}</span>
    //   </div>
    //   <div className={styles.userDetailsRow}>
    //     <label>Email:</label>
    //     <span>{email}</span>
    //   </div>
    //   <div className={styles.userDetailsRow}>
    //     <label>First Name:</label>
    //     <span>{firstname}</span>
    //   </div>
    //   <div className={styles.userDetailsRow}>
    //     <label>Last Name:</label>
    //     <span>{lastname}</span>
    //   </div>
    //   <div className={styles.userDetailsRow}>
    //     <label>Birth Date:</label>
    //     <span>{birth_date}</span>
    //   </div>
    //   <div className={styles.userDetailsRow}>
    //     <label>Gender:</label>
    //     <span>{gender}</span>
    //   </div>
    //   <div className={styles.userDetailsRow}>
    //     <label>Height (cm):</label>
    //     <span>{height_in_cm}</span>
    //   </div>
    //   <div className={styles.userDetailsRow}>
    //     <label>Weight (kg):</label>
    //     <span>{weight_in_kg}</span>
    //   </div>
    //   <div className={styles.userDetailsRow}>
    //     <label>Phone Number:</label>
    //     <span>{phone_number}</span>
    //   </div>
    //   <div className={styles.userDetailsRow}>
    //     <label>Is Admin:</label>
    //     <span>{is_admin ? "Yes" : "No"}</span>
    //   </div>
    //   <div className={styles.userDetailsRow}>
    //     <label>Is Federated:</label>
    //     <span>{is_federated ? "Yes" : "No"}</span>
    //   </div>
    // </div>
    <div className={{ alignSelf: "flex-start" }}>
      <table className="PlansTable">
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
      <table className="PlansTable">
        <thead>
          <tr>
            <th>Cumpleaños</th>
            <th>Genero</th>
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

export default UserDetailsScreen;

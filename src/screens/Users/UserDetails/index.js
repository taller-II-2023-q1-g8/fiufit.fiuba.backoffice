import React, { useEffect, useState, useContext } from "react";
import styles from "./styles.module.scss";
import {
  fetchUserByUsername,
  fetchBlockedStatusByUsername,
  blockUser,
  fetchAdminByUsername,
  fetchAdminByEmail,
  unblockUser,
} from "../../../requests";
import { useParams } from "react-router-dom";
import { userContext } from "../../../App";
import Loader from "../../../components/Loader";

const UserDetails = () => {
  const params = useParams();
  const adminContext = useContext(userContext);
  const [userData, setUserData] = useState([]);
  const [blockedData, setBlockedData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const userData = (await fetchUserByUsername(params.username)).message;
      setUserData(userData);
    }
    async function fetchBlockedData() {
      const blockedData = (await fetchBlockedStatusByUsername(params.username))
        .message;
      setBlockedData(blockedData);
    }
    fetchData();
    fetchBlockedData();
  }, []);

  const handleBlockUser = async () => {
    const adminUsername = (await fetchAdminByEmail(adminContext.email)).message
      .username;
    blockUser(params.username, adminUsername).then(() => {window.location.reload()});
  };

  const handleUnblockUser = async () => {
    unblockUser(params.username).then(() => {window.location.reload()});
  };

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
      <h3>Bloqueo de Usuario</h3>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Estado</th>
            <th>Administrador</th>
            <th>Fecha</th>
          </tr>
        </thead>
        <tr>
          <td>{blockedData.blocked ? "Bloqueado" : "Desbloqueado"}</td>
          <td>{blockedData.blocked ? blockedData.blocked_by : "-"}</td>
          <td>{blockedData.blocked ? blockedData.when : "-"}</td>
        </tr>
      </table>
      {blockedData.blocked ? (
        <button className={styles.unblockButton} onClick={handleUnblockUser}>Desbloquear</button>
      ) : (
        <button className={styles.blockButton} onClick={handleBlockUser}>Bloquear</button>
      )}
    </div>
  ) : (
    <Loader />
  );
};

export default UserDetails;

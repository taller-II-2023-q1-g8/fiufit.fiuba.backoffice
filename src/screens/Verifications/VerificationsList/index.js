import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  fetchAllAthletes,
  fetchAllVerifications,
  rejectTrainer,
  verifyTrainer,
} from "../../../requests";
import VisibilityIcon from "@material-ui/icons/Visibility";
import Loader from "../../../components/Loader";
import styles from "./styles.module.scss";

export const VerificationsList = () => {
  const [verifications, setVerifications] = useState([]);
  const [error, setError] = useState(false);
  const [users, setUsers] = useState({});

  useEffect(() => {
    async function fetchData() {
      try {
        const allverifications = await fetchAllVerifications();
        if (allverifications) {
          setVerifications(allverifications);
        }
        const allUsers = await fetchAllAthletes();
        if (allUsers) {
          setUsers(allUsers);
        }
      } catch (error) {
        setError(error);
      }
    }
    fetchData();
  }, []);

  async function verify(id) {
    await verifyTrainer(id).then(async () => {
      const allverifications = await fetchAllVerifications();
      if (allverifications) {
        setVerifications(allverifications);
      }
    });
  }

  async function reject(id) {
    await rejectTrainer(id).then(async () => {
      const allverifications = await fetchAllVerifications();
      if (allverifications) {
        setVerifications(allverifications);
      }
    });
  }

  function getStatus(int) {
    switch (int) {
      case 1:
        return <span style={{ color: "blue" }}>Pendiente</span>;
      case 2:
        return <span style={{ color: "green" }}>Aprobado</span>;
      case 3:
        return <span style={{ color: "red" }}>Rechazado</span>;
      default:
        return <span style={{ color: "black" }}>Sin verificar</span>;
    }
  }

  const getTrainerName = (id) =>
    users.find((user) => user.id === id)?.external_id || "No name";

  return verifications.length > 0 && !error ? (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Nombre Entrenador</th>
          <th>Estado</th>
          <th>Video</th>
          <th>Acción</th>
        </tr>
      </thead>
      <tbody>
        {verifications.map((verification) => (
          <tr key={verification.id}>
            <td>{getTrainerName(verification.trainer_id)}</td>
            <td>{getStatus(verification.status)}</td>
            <td>
              <Link
                to={
                  "https://firebasestorage.googleapis.com/v0/b/fiufit-73a11.appspot.com/o/verifications%2Fuser_" +
                  verification.trainer_id +
                  ".mp4?alt=media"
                }
                className={styles.link}
                target="_blank"
                download
              >
                <VisibilityIcon />
              </Link>
            </td>
            <td>
              {verification.status !== 2 ? (
                <button
                  className={styles.yes}
                  onClick={() => verify(verification.trainer_id)}
                >
                  Verificar
                </button>
              ) : null}
              <span> </span>
              {verification.status !== 3 ? (
                <button
                  className={styles.no}
                  onClick={() => reject(verification.trainer_id)}
                >
                  Rechazar
                </button>
              ) : null}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  ) : error ? (
    <h2 style={{ color: "red" }}>Servicio deshabilitado</h2>
  ) : (
    <Loader />
  );
};

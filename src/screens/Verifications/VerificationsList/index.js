import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
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

  useEffect(() => {
    async function fetchData() {
      try {
        const allverifications = await fetchAllVerifications();
        if (allverifications) {
          setVerifications(allverifications);
        }
      } catch (error) {
        console.log({ error });
        setError(true);
      }
    }
    fetchData();
  }, []);

  async function verify(id) {
    console.log(id);
    await verifyTrainer(id).then(async () => {
      console.log("verificado");
      const allverifications = await fetchAllVerifications();
      if (allverifications) {
        setVerifications(allverifications);
      }
    });
  }

  async function reject(id) {
    console.log(id);
    await rejectTrainer(id).then(async () => {
      console.log("rechazado");
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

  return verifications.length > 0 && !error ? (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>ID</th>
          <th>Estado</th>
          <th>Video</th>
          <th>Acción</th>
        </tr>
      </thead>
      <tbody>
        {verifications.map((verification) => (
          <tr key={verification.id}>
            <td>{verification.trainer_id}</td>
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
    <h2 style={{ color: "red" }}>Servicio desabilitado</h2>
  ) : (
    <Loader />
  );
};

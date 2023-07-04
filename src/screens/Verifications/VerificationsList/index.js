import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  fetchAllVerifications,
  rejectTrainer,
  verifyTrainer,
} from "../../../requests";
import VisibilityIcon from "@material-ui/icons/Visibility";

export const VerificationsList = () => {
  const [verifications, setVerifications] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const allverifications = (await fetchAllVerifications()).message;
      if (allverifications) {
        setVerifications(allverifications);
      }
    }
    fetchData();
  }, []);

  async function verify(id) {
    console.log(id);
    await verifyTrainer(id).then(async () => {
      console.log("verificado");
      const allverifications = (await fetchAllVerifications()).message;
      if (allverifications) {
        setVerifications(allverifications);
      }
    });
  }

  async function reject(id) {
    console.log(id);
    await rejectTrainer(id).then(async () => {
      console.log("rechazado");
      const allverifications = (await fetchAllVerifications()).message;
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
        return <span style={{ color: "green" }}>Aprovado</span>;
      case 3:
        return <span style={{ color: "red" }}>Rechazado</span>;
      default:
        return <span style={{ color: "black" }}>Sin verificar</span>;
    }
  }

  return (
    <table className="VerificationsTable">
      <thead>
        <tr>
          <th>ID</th>
          <th>Estado</th>
          <th>Video</th>
          <th>Accion</th>
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
                target="_blank"
                download
              >
                <VisibilityIcon />
              </Link>
            </td>
            <td>
              {verification.status !== 2 ? (
                <button
                  className="yes"
                  onClick={() => verify(verification.trainer_id)}
                >
                  Vrificar
                </button>
              ) : null}
              <span> </span>
              {verification.status !== 3 ? (
                <button
                  className="no"
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
  );
};

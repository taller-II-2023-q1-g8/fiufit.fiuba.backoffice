import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  fetchAllTrainersVerifications,
  rejectTrainer,
  verifyTrainer,
} from "../../../requests";
import VisibilityIcon from "@material-ui/icons/Visibility";

export const TrainersList = () => {
  const [Trainers, setTrainers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const allTrainers = (await fetchAllTrainersVerifications()).message;
      if (allTrainers) {
        setTrainers(allTrainers);
      }
    }
    fetchData();
  }, []);

  async function verify(id) {
    console.log(id);
    await verifyTrainer(id).then(() => {
      console.log("verificado");
      window.location.reload();
    });
  }

  async function reject(id) {
    console.log(id);
    await rejectTrainer(id).then(() => {
      console.log("rechazado");
      window.location.reload();
    });
  }

  function getStatus(int) {
    switch (int) {
      case 0:
        return <span style={{ color: "blue" }}>Pendiente</span>;
      case 1:
        return <span style={{ color: "green" }}>Aprovado</span>;
      case 2:
        return <span style={{ color: "red" }}>Rechazado</span>;
      default:
        return <span style={{ color: "black" }}>Sin verificar</span>;
    }
  }

  return (
    <table className="TrainersTable">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Estado</th>
          <th>Video</th>
          <th>Accion</th>
        </tr>
      </thead>
      {Trainers.map((Trainer) => (
        <tr key={Trainer.id}>
          <td>{Trainer.id}</td>
          <td>{Trainer.name}</td>
          <td>{getStatus(Trainer.status)}</td>
          <td>
            <Link
              to={
                "https://firebasestorage.googleapis.com/v0/b/fiufit-73a11.appspot.com/o/verifications%2Fuser_" +
                Trainer.id +
                ".mp4?alt=media"
              }
              target="_blank"
              download
            >
              <VisibilityIcon />
            </Link>
          </td>
          <td>
            <button className="yes" onClick={() => verify(Trainer.id)}>
              Vrificar
            </button>
            <span> </span>
            <button className="no" onClick={() => reject(Trainer.id)}>
              Rechazar
            </button>
          </td>
        </tr>
      ))}
    </table>
  );
};

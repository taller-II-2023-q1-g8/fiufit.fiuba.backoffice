import { fetchPlanById } from "../../../requests";
import { useParams } from "react-router-dom";
import Loader from "../../../components/Loader";
import React, { useEffect, useState, Fragment } from "react";
import styles from "./styles.module.scss";

import { unblockPlan, blockPlan } from "../../../requests";

const PlanDetails = () => {
  const params = useParams();
  const [planData, setPlanData] = useState([]);
  async function fetchData() {
    const planData = await fetchPlanById(params.id);
    setPlanData(planData);
  }
  useEffect(() => {
    fetchData();
  }, []);

  const handleBlockPlan = async () => {
    blockPlan(params.id).then(() => {
      fetchData();
    });
  };

  const handleUnblockPlan = async () => {
    unblockPlan(params.id).then(() => {
      fetchData();
    });
  };

  const {
    id,
    blocked,
    title,
    description,
    difficulty,
    trainer_id,
    athletes,
    exercises,
    tags,
    created_at,
    updated_at,
  } = planData;

  const mapDifficulty = (receivedDifficulty) => {
    if (receivedDifficulty === "EASY") return "FÁCIL";
    if (receivedDifficulty === "HARD") return "DIFICIL";
    return receivedDifficulty;
  };

  const mapBodyPart = (receivedTags) => {
    let groupOfTags = ["-"];
    if (receivedTags.includes(","))
      groupOfTags = receivedTags.split(",").map((tag) => tag.trim());
    else groupOfTags = [receivedTags];

    return groupOfTags.map((tag) => {
      if (tag === "CHEST") return "PECHO";
      if (tag === "ARMS") return "BRAZOS";
      if (tag === "ABS") return "ABDOMEN";
      if (tag === "LEGS") return "PIERNAS";
      if (tag === "Back") return "ESPALDA";
      return tag;
    });
  };

  return Object.keys(planData).length > 0 ? (
    <div className={{ alignSelf: "flex-start" }}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Estado</th>
            <th>Título del plan</th>
            <th>Descripción</th>
            <th>Dificultad</th>
            <th>ID del entrenador</th>
            <th>Tags</th>
            <th>Fecha de creación</th>
            <th>Última actualización</th>
          </tr>
        </thead>
        <tr key={id}>
          <td>{id || "-"}</td>
          <td>{blocked === "true" ? "Bloqueado" : "Desbloqueado"}</td>
          <td>{title || "-"}</td>
          <td>{description || "-"}</td>
          <td>{mapDifficulty(difficulty) || "-"}</td>
          <td>{trainer_id || "-"}</td>
          <td>
            {mapBodyPart(tags).map((tag) => (
              <>
                {tag} <br />
              </>
            ))}
          </td>
          <td>{new Date(created_at).toLocaleString() || "-"}</td>
          <td>{new Date(updated_at).toLocaleString() || "-"}</td>
        </tr>
      </table>
      {exercises.length > 0 && (
        <Fragment>
          <h3>EJERCICIOS</h3>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>ID</th>
                <th>Título</th>
                <th>Músculos</th>
                <th>Repeticiones</th>
                <th>Peso</th>
              </tr>
            </thead>
            {exercises.map((exercise) => (
              <tr key={exercise.id}>
                <td>{exercise.id || "-"}</td>
                <td>{exercise.title || "-"}</td>
                <td>
                  {mapBodyPart(exercise.muscles).map((tag) => (
                    <>
                      {tag} <br />
                    </>
                  ))}
                </td>{" "}
                <td>{exercise.reps || "-"}</td>
                <td>{exercise.weight || "-"}</td>
              </tr>
            ))}
          </table>{" "}
        </Fragment>
      )}
      {athletes.length > 0 && (
        <Fragment>
          <h3>ATLETAS</h3>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>ID</th>
                <th>ID Externo</th>
                <th>Está likeado</th>
                <th>Calificaciones</th>
                <th>Puntaje</th>
              </tr>
            </thead>
            {athletes.map((athlete) => (
              <tr key={athlete.id}>
                <td>{athlete.id || "-"}</td>
                <td>{athlete.external_id || "-"}</td>
                <td>{athlete.is_liked ? "Sí" : "No"}</td>
                <td>{athlete.calification || "-"}</td>
                <td>{athlete.calification_score || "-"}</td>
              </tr>
            ))}
          </table>
        </Fragment>
      )}
      {blocked === "true" ? (
        <button className={styles.unblockButton} onClick={handleUnblockPlan}>
          Desbloquear
        </button>
      ) : (
        <button className={styles.blockButton} onClick={handleBlockPlan}>
          Bloquear
        </button>
      )}
    </div>
  ) : (
    <Loader />
  );
};

export default PlanDetails;

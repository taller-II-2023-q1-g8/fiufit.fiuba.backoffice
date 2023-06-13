import React, { useEffect, useState, Fragment } from "react";
import { fetchPlanById } from "../../../requests";
import { useParams } from "react-router-dom";
import Loader from "../../../components/Loader";

const PlanDetails = () => {
  const params = useParams();
  const [planData, setPlanData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      console.log({ id: params.id });
      const planData = (await fetchPlanById(params.id)).message;
      setPlanData(planData);
    }
    fetchData();
  }, []);

  const {
    id,
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
  console.log(planData);

  return Object.keys(planData).length > 0 ? (
    <div className={{ alignSelf: "flex-start" }}>
      <table className="PlansTable">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Description</th>
            <th>Difficulty</th>
            <th>Trainer ID</th>
            <th>Tags</th>
            <th>Created At</th>
            <th>Updated At</th>
          </tr>
        </thead>
        <tr key={id}>
          <td>{id}</td>
          <td>{title}</td>
          <td>{description}</td>
          <td>{difficulty}</td>
          <td>{trainer_id}</td>
          <td>{tags}</td>
          <td>{created_at}</td>
          <td>{updated_at}</td>
        </tr>
      </table>
      {exercises.length > 0 && (
        <Fragment>
          <h3>EJERCICIOS</h3>
          <table className="PlansTable">
            <thead>
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Muscles</th>
                <th>Reps</th>
                <th>Weight</th>
              </tr>
            </thead>
            {exercises.map((exercise) => (
              <tr key={exercise.id}>
                <td>{exercise.id}</td>
                <td>{exercise.title}</td>
                <td>{exercise.muscles}</td>
                <td>{exercise.reps}</td>
                <td>{exercise.weight}</td>
              </tr>
            ))}
          </table>{" "}
        </Fragment>
      )}
      {athletes.length > 0 && (
        <Fragment>
          <h3>ATLETAS</h3>
          <table className="PlansTable">
            <thead>
              <tr>
                <th>ID</th>
                <th>External ID</th>
                <th>Está likeado</th>
                <th>Calificaciones</th>
                <th>Puntaje</th>
              </tr>
            </thead>
            {athletes.map((athlete) => (
              <tr key={athlete.id}>
                <td>{athlete.id}</td>
                <td>{athlete.external_id}</td>
                <td>{athlete.is_liked ? "Sí" : "No"}</td>
                <td>{athlete.calification}</td>
                <td>{athlete.calification_score}</td>
              </tr>
            ))}
          </table>
        </Fragment>
      )}
    </div>
  ) : (
    <Loader />
  );
};

export default PlanDetails;

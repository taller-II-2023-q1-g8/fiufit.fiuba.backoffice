import { useState, useEffect } from "react";
import { fetchAllPlans } from "../../requests";
import "./index.css";
import { Topbar } from "../../components/Topbar";

export const PlansScreen = () => {
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const allPlans = (await fetchAllPlans()).message;
      if (allPlans) {
        setPlans(allPlans);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="Container">
      <Topbar />
      <div className="HomeDataContainer">
        <h1>Planes de Entrenamiento</h1>
        <table className="PlansTable">
          <thead>
            <tr>
              <th>ID</th>
              <th>Título</th>
              <th>Creación</th>
              <th>Modificación</th>
            </tr>
          </thead>
          {plans.map((plan) => (
            <tr key={plan.id}>
              <td>{plan.id}</td>
              <td>{plan.title}</td>
              <td>{new Date(plan.created_at).toLocaleString()}</td>
              <td>{new Date(plan.updated_at).toLocaleString()}</td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};

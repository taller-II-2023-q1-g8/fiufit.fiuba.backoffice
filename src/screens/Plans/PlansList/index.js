import { useEffect, useState } from "react";
import { fetchAllPlans } from "../../../requests";
import { Link } from "react-router-dom";

export const PlansList = () => {
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
          <td>
            <Link
              style={{
                textDecoration: "none",
                color: "var(--main)",
                fontWeight: "bold",
              }}
              to={`/plans/${plan.id}`}
            >
              {plan.id}
            </Link>
          </td>
          <td>{plan.title}</td>
          <td>{new Date(plan.created_at).toLocaleString()}</td>
          <td style={{ textAlign: "center" }}>
            {new Date(plan.updated_at).toLocaleString()}
          </td>
        </tr>
      ))}
    </table>
  );
};

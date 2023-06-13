import "./index.css";
import { Topbar } from "../../components/Topbar";
import { Route, Routes } from "react-router-dom";
import { PlansList } from "./PlansList";
import PlanDetails from "./PlanDetails";

export const Plans = () => {
  return (
    <div className="Container">
      <Topbar />
      <div className="HomeDataContainer">
        <h1>Planes de Entrenamiento</h1>
        <Routes>
          <Route path="/" exact="true" element={<PlansList />} />
          <Route path="/:id" element={<PlanDetails />} />
        </Routes>
      </div>
    </div>
  );
};

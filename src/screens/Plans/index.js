import { PlansList } from "./PlansList";
import { Route, Routes } from "react-router-dom";
import { Topbar } from "../../components/Topbar";
import PlanDetails from "./PlanDetails";
import styles from "./styles.module.scss";

export const Plans = () => {
  return (
    <div className={styles.pageContainer}>
      <Topbar />
      <div className={styles.container}>
        <h1>Planes de Entrenamiento</h1>
        <Routes>
          <Route path="/" exact="true" element={<PlansList />} />
          <Route path="/:id" element={<PlanDetails />} />
        </Routes>
      </div>
    </div>
  );
};

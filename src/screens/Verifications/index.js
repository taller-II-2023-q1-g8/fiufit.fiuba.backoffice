import { Route, Routes } from "react-router-dom";
import { Topbar } from "../../components/Topbar";
import styles from "./styles.module.scss";
import { VerificationsList } from "./VerificationsList";

export const Verifications = () => {
  return (
    <div className={styles.pageContainer}>
      <Topbar />
      <div className={styles.container}>
        <h1>Centro de Verificación</h1>
        <Routes>
          <Route path="/" exact="true" element={<VerificationsList />} />
        </Routes>
      </div>
    </div>
  );
};

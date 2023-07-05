import { Route, Routes } from "react-router-dom";
import { Topbar } from "../../components/Topbar";
import styles from "./styles.module.scss";
import { GoBackButton } from "../../components/GoBackButton";
import { VerificationsList } from "./VerificationsList";

export const Verifications = () => {
  return (
    <div className={styles.pageContainer}>
      <Topbar />
      <div className={styles.container}>
        <GoBackButton />
        <h1>Centro de Verificacion</h1>
        <Routes>
          <Route path="/" exact="true" element={<VerificationsList />} />
        </Routes>
      </div>
    </div>
  );
};

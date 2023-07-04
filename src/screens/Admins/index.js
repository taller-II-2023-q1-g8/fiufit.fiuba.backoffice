import { Route, Routes } from "react-router-dom";
import { Topbar } from "../../components/Topbar";
import styles from "./styles.module.scss";
import AdminsList from "./AdminsList";
import AdminDetails from "./AdminDetails";
import AddAdmin from "./AddAdmin";

export const AdminsScreen = () => (
  <div className={styles.pageContainer}>
    <Topbar />
    <div className={styles.container}>
      <h1>Administradores</h1>
      <Routes>
        <Route path="/" exact="true" element={<AdminsList />} />
        <Route path="/:username" element={<AdminDetails />} />
        <Route path="/add" element={<AddAdmin />} />
      </Routes>
    </div>
  </div>
);

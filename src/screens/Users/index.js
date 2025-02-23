import { Route, Routes } from "react-router-dom";
import UserDetails from "./UserDetails";
import UsersList from "./UsersList";
import { Topbar } from "../../components/Topbar";
import styles from "./styles.module.scss";

export const Users = () => {
  return (
    <div className={styles.pageContainer}>
      <Topbar />
      <div className={styles.container}>
        <h1>Atletas y Entrenadores</h1>
        <Routes>
          <Route path="/" exact="true" element={<UsersList />} />
          <Route path="/:username" element={<UserDetails />} />
        </Routes>
      </div>
    </div>
  );
};

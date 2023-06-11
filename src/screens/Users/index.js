import { Route, Routes } from "react-router-dom";
import UserDetailsScreen from "./UserDetailsScreen";
import UsersList from "./UsersList";
import { Topbar } from "../../components/Topbar";
import styles from "./styles.module.scss";

export const Users = () => {
  return (
    <div>
      <div className={styles.pageContainer}>
        <Topbar />
        <div className={styles.usersContainer}>
          <h1>Atletas y Entrenadores</h1>
          <div className={styles.userDetailsContainer}>
            <Routes>
              <Route path="/" exact="true" element={<UsersList />} />
              <Route path="/:username" element={<UserDetailsScreen />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
};

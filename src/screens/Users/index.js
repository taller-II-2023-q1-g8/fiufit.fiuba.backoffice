import { Route, Routes } from "react-router-dom";
import UserDetailsScreen from "./UserDetailsScreen";
import UsersList from "./UsersList";
import { Topbar } from "../../components/Topbar";
import "./styles.css";

export const Users = () => {
  return (
    <div>
      <div className="Container">
        <Topbar />
        <div className="HomeDataContainer">
          <h1>Atletas y Entrenadores</h1>
          <Routes>
            <Route path="/" exact="true" element={<UsersList />} />
            <Route path="/:username" element={<UserDetailsScreen />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

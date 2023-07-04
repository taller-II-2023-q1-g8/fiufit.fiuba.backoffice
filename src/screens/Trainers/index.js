import "./index.css";
import { Topbar } from "../../components/Topbar";
import { Route, Routes } from "react-router-dom";
import { TrainersList } from "./TrainersList";

export const Trainers = () => {
  return (
    <div className="Container">
      <Topbar />
      <div className="HomeDataContainer">
        <h1>Traineres</h1>
        <Routes>
          <Route path="/" exact="true" element={<TrainersList />} />
        </Routes>
      </div>
    </div>
  );
};

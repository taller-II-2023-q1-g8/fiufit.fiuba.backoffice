import "./index.css";
import { Topbar } from "../../components/Topbar";
import { Route, Routes } from "react-router-dom";
import { VerificationsList } from "./VerificationsList";

export const Verifications = () => {
  return (
    <div className="Container">
      <Topbar />
      <div className="HomeDataContainer">
        <h1>Centro de Verificacion</h1>
        <Routes>
          <Route path="/" exact="true" element={<VerificationsList />} />
        </Routes>
      </div>
    </div>
  );
};

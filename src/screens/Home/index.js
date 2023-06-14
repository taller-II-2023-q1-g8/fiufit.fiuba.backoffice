import "./index.css";
import { Link } from "react-router-dom";
import { Topbar } from "../../components/Topbar";

export function HomeScreen() {

  return (
    <div className="Container">
      <Topbar />
      <div className="HomeDataContainer">
        <h1 style={{ color: "white" }}>INICIO</h1>
        <div class="Menu">
          <Link to="/users" className="OptionContainer">
            <div className="OptionIcon UsersIcon" />
            <p>Atletas y Entrenadores</p>
          </Link>
          <Link to="/plans" className="OptionContainer">
            <div className="OptionIcon PlansIcon" />
            <p>Planes y Ejercicios</p>
          </Link>
          <Link to="/admins" className="OptionContainer">
            <div className="OptionIcon AdminsIcon" />
            <p>Administradores</p>
          </Link>
          <Link to="/metrics" className="OptionContainer">
            <div className="OptionIcon MetricsIcon" />
            <p>Métricas</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

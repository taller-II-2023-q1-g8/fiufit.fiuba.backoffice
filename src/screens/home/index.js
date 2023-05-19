import { useContext } from "react";
import { signOutContext, userContext } from "../../App";
import { Link } from "react-router-dom";
import "./index.css";


export function HomeScreen() {
    const userData = useContext(userContext);
    const logout = useContext(signOutContext);
    return (
        <div className="Container">
            <div className="Nav">
                <div className="FiuFitContainer">
                    <h1>FiuFit</h1>
                    <h2>Back Office</h2>
                </div>
                <h2 className="Email">{userData.email}</h2>
            </div>
            <div className="HomeDataContainer">
                <h1 style={{color: 'white'}}>INICIO</h1>
                <div class="Menu">
                    <Link to="/users" className="OptionContainer">
                        <div className="OptionIcon UsersIcon"/>
                        <p>Atletas y Entrenadores</p>
                    </Link>
                    <Link to="/plans" className="OptionContainer">
                        <div className="OptionIcon PlansIcon"/>
                        <p>Planes y Ejercicios</p>
                    </Link>
                    <Link to="/admins" className="OptionContainer">
                        <div className="OptionIcon AdminsIcon"/>
                        <p>Administradores</p>
                    </Link>
                </div>
            </div>
            <button onClick={logout}>Salir</button>
        </div>
    );
}
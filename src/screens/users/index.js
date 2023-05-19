import { Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { UserEntry } from "./UserEntry";
import "./index.css";
import { fetchAllUsers } from "../../requests";
import { userContext } from "../../App";

export default function UsersScreen() {
    const userData = useContext(userContext);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        async function fetchData(){
            const allUsers = (await fetchAllUsers()).message;
            if (allUsers) {
                setUsers(allUsers.filter((user) => !user.is_admin))
            }
        }
        fetchData();
    }, []);

    return (
        <div className="Container">
            <div className="Nav">
                <Link className="FiuFitContainer" to="/">
                    <h1>FiuFit</h1>
                    <h2>Back Office</h2>
                </Link>
                <h2 className="Email">{userData.email}</h2>
            </div>
            <div className="HomeDataContainer">
                <h1>Atletas y Entrenadores</h1>
                <table className="UsersTable">
                    <thead>
                        <tr>
                            <th>Username</th>
                            <th>Nombre</th>
                            <th>Apellido</th>
                            <th>Correo</th>
                        </tr>
                    </thead>
                    {users.sort((a,b) => a.username.localeCompare(b.username))
                        .slice(0,18).map((user) => 
                        <UserEntry key={user.username} user={user}/>)}
                </table>
            </div>
        </div>
    );
}
import { useState, useEffect } from "react";
import { UserEntry } from "./UserEntry";
import "./index.css";
import { fetchAllUsers } from "../../requests";
import { Topbar } from "../../components/Topbar";

export default function UsersScreen() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const allUsers = (await fetchAllUsers()).message;
      setUsers(allUsers);
    }
    fetchData();
  }, []);

  return (
    <div className="Container">
      <Topbar />
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
          {users
            .sort((a, b) => a.username.localeCompare(b.username))
            .slice(0, 18)
            .map((user) => (
              <UserEntry key={user.username} user={user} />
            ))}
        </table>
      </div>
    </div>
  );
}

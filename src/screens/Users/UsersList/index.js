import { useEffect, useState } from "react";
import { fetchAllUsers } from "../../../requests";
import { UserEntry } from "./UserEntry";
import Loader from "../../../components/Loader";
import styles from "./styles.module.scss";

export default function UsersList() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const allUsers = await fetchAllUsers();
        setUsers(allUsers.message);
      } catch (error) {
        setError(error);
      }
    }
    fetchData();
  }, []);

  return users.length > 0 && !error ? (
    <table className={styles.table}>
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
        // .slice(0, 18)
        .map((user) => (
          <UserEntry key={user.username} user={user} />
        ))}
    </table>
  ) : error ? (
    <h2 style={{ color: "red" }}>Servicio deshabilitado</h2>
  ) : (
    <Loader />
  );
}

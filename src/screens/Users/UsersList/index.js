import { useEffect, useState } from "react";
import { fetchAllUsers } from "../../../requests";
import { UserEntry } from "./UserEntry";
import Loader from "../../../components/Loader";
import styles from "./styles.module.scss";

export default function UsersList() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const allUsers = await fetchAllUsers();
        setUsers(allUsers.message);
      } catch (error) {
        console.log({ error });
        window.location.href = "/";
      }
    }
    fetchData();
  }, []);

  return users.length > 0 ? (
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
  ) : (
    <Loader />
  );
}

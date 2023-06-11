import { useEffect, useState } from "react";
import { fetchAllUsers } from "../../../requests";
import { UserEntry } from "./UserEntry";
import Loader from "../../../components/Loader";
import styles from "./styles.module.scss";
export default function UsersList() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const allUsers = (await fetchAllUsers()).message;
      setUsers(allUsers);
    }
    fetchData();
  }, []);

  console.log({ users });
  return users.length > 0 ? (
    <table>
      <thead className={styles.header}>
        <tr>
          <th>Username</th>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Correo</th>
        </tr>
      </thead>
      <tbody>
        {users
          .sort((a, b) => a.username.localeCompare(b.username))
          .slice(0, 18)
          .map((user) => (
            <UserEntry key={user.username} user={user} />
          ))}
      </tbody>
    </table>
  ) : (
    <Loader />
  );
}

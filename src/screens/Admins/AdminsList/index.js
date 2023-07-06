import { Fragment, useEffect, useState } from "react";
import { fetchAllAdmins } from "../../../requests";
import { AdminEntry } from "./AdminEntry";
import Loader from "../../../components/Loader";
import styles from "./styles.module.scss";
import { Link } from "react-router-dom";

export default function AdminsList() {
  const [admins, setAdmins] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const allAdmins = (await fetchAllAdmins()).message;
        setAdmins(allAdmins);
      } catch (error) {
        console.log({ error });
        setError(error);
      }
    }
    fetchData();
  }, []);

  return admins.length > 0 && !error ? (
    <Fragment>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Username</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Correo</th>
          </tr>
        </thead>
        {admins
          .sort((a, b) => a.username.localeCompare(b.username))
          .slice(0, 18)
          .map((admin) => (
            <AdminEntry key={admin.username} admin={admin} />
          ))}
      </table>
      <Link to="/admins/add">
        <button className={styles.button}>Agregar</button>
      </Link>
    </Fragment>
  ) : error ? (
    <h2 style={{ color: "red" }}>Servicio desabilitado</h2>
  ) : (
    <Loader />
  );
}

import { Fragment, useEffect, useState } from "react";
import { fetchAllServices } from "../../../requests";
import { ServiceEntry } from "./ServiceEntry";
import Loader from "../../../components/Loader";
import styles from "./styles.module.scss";
import { Link } from "react-router-dom";

export default function ServicesList() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const services = await fetchAllServices();
      setServices(services.message.services);
    }
    fetchData();
  }, []);

  console.log({ services, len: services.length });
  return services.length > 0 ? (
    <Fragment>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Estado</th>
          </tr>
        </thead>
        {services.map((service) => (
          <ServiceEntry service={service} />
        ))}
      </table>
      <Link to="/admins/add">
        <button className={styles.button}>Agregar</button>
      </Link>
    </Fragment>
  ) : (
    <Loader />
  );
}

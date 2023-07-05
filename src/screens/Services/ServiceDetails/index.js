import React, { Fragment, useEffect, useState } from "react";
import styles from "./styles.module.scss";
import {
  blockService,
  fetchAllServices,
  unblockService,
} from "../../../requests";
import { useParams } from "react-router-dom";
import Loader from "../../../components/Loader";

const ServiceDetails = () => {
  const params = useParams();
  const [service, setService] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const services = (await fetchAllServices()).message.services;
      const service = services.find((service) => service.name === params.name);
      setService(service);
    }
    fetchData();
  }, []);

  const handleBlockUser = async () => {
    blockService(params.name).then(() => {
      window.location.reload();
    });
  };

  const handleUnblockUser = async () => {
    unblockService(params.name).then(() => {
      window.location.reload();
    });
  };

  return Object.keys(service).length > 0 ? (
    <Fragment>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tr>
          <td>{service.name || "-"}</td>
          <td>{service.description || "-"}</td>
          <td
            style={{
              color: service.state === "blocked" ? "#ff2424" : "rgb(30 255 0)",
              fontWeight: 400,
            }}
          >
            {service.state === "blocked" ? "Bloqueado" : "Activado" || ""}
          </td>
        </tr>
      </table>
      {service.state === "blocked" ? (
        <button className={styles.unblockButton} onClick={handleUnblockUser}>
          Desbloquear
        </button>
      ) : (
        <button className={styles.blockButton} onClick={handleBlockUser}>
          Bloquear
        </button>
      )}
    </Fragment>
  ) : (
    <Loader />
  );
};

export default ServiceDetails;

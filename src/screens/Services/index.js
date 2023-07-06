import { Route, Routes } from "react-router-dom";
import { Topbar } from "../../components/Topbar";
import styles from "./styles.module.scss";
import ServicesList from "./ServicesList";
import ServiceDetails from "./ServiceDetails";
import AddService from "./AddService";

export const Services = () => (
  <div className={styles.pageContainer}>
    <Topbar />
    <div className={styles.container}>
      <h1>Servicios</h1>
      <Routes>
        <Route path="/" exact="true" element={<ServicesList />} />
        <Route path="/:name" element={<ServiceDetails />} />
        <Route path="/add" element={<AddService />} />
      </Routes>
    </div>
  </div>
);

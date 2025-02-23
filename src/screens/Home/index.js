import { Link } from "react-router-dom";
import { Topbar } from "../../components/Topbar";
import styles from "./styles.module.scss";

export function HomeScreen() {
  return (
    <div className={styles.pageContainer}>
      <Topbar />
      <div className={styles.options}>
        <Link to="/users" className={styles.optionContainer}>
          <div className={`${styles.icon} ${styles.usersIcon}`} />
          <p>Atletas y Entrenadores</p>
        </Link>
        <Link to="/plans" className={styles.optionContainer}>
          <div className={`${styles.icon} ${styles.plansIcon}`} />
          <p>Planes y Ejercicios</p>
        </Link>
        <Link to="/admins" className={styles.optionContainer}>
          <div className={`${styles.icon} ${styles.adminsIcon}`} />
          <p>Administradores</p>
        </Link>
        <Link to="/verifications" className={styles.optionContainer}>
          <div className={`${styles.icon} ${styles.verificationsIcon}`} />
          <p>Centro de Verificación</p>
        </Link>
        <Link to="/metrics" className={styles.optionContainer}>
          <div className={`${styles.icon} ${styles.metricsIcon}`} />
          <p>Métricas</p>
        </Link>
        <Link to="/services" className={styles.optionContainer}>
          <div className={`${styles.icon} ${styles.servicesIcon}`} />
          <p>Servicios</p>
        </Link>
      </div>
    </div>
  );
}

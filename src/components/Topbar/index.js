import UserOptions from "./components/UserOptions";
import styles from "./styles.module.scss";
import { Link, useNavigate } from "react-router-dom";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

export function Topbar() {
  let navigate = useNavigate();

  return (
    <div className={styles.topbarContainer}>
      <div className={styles.titleContainer}>
        {window.location.pathname !== "/" && (
          <button className="btn-back" onClick={() => navigate(-1)}>
            <ArrowBackIcon />
          </button>
        )}
        <Link to="/" className={styles.title}>
          <h1>FiuFit</h1>
        </Link>
        <h2>Back Office</h2>
      </div>
      <UserOptions />
    </div>
  );
}

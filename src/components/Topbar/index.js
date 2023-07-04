import UserOptions from "./components/UserOptions";
import styles from "./styles.module.scss";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

export function Topbar() {
  let navigate = useNavigate();
  return (
    <div className={styles.topbarContainer}>
      <div className={styles.titleContainer}>
        <button className="btn-back" onClick={() => navigate(-1)}>
          <ArrowBackIcon />
        </button>
        <h1>
          <a href="/" style={{ color: "#FFFFFF" }}>
            FiuFit
          </a>
        </h1>
        <h2>Back Office</h2>
      </div>
      <UserOptions />
    </div>
  );
}

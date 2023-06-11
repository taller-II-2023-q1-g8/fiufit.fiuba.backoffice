import UserOptions from "./components/UserOptions";
import styles from "./styles.module.scss";

export function Topbar() {
  return (
    <div className={styles.topbarContainer}>
      <div className={styles.titleContainer}>
        <h1>FiuFit</h1>
        <h2>Back Office</h2>
      </div>
      <UserOptions />
    </div>
  );
}

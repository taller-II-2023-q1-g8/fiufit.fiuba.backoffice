import { TextField } from "../../components/TextField";
import styles from "./styles.module.scss";

export function LoginScreen({ setEmail, setPassword, handleSubmit }) {
  //let navigate = useNavigate();
  return (
    <div className={styles.loginScreen}>
      <div className={styles.loginFormContainer}>
        <h1>
          <a href="/" style={{ color: "#FFFFFF" }}>
            FiuFit
          </a>
        </h1>
        <h2>Back Office</h2>
        <div className={styles.loginForm}>
          <TextField
            label="Email"
            onChange={setEmail}
            placeholder="Ingrese su email"
          />
          <TextField
            label="Contraseña"
            onChange={setPassword}
            type="password"
            placeholder="Ingrese su contraseña"
          />
          <button className={styles.submitButton} onClick={handleSubmit}>
            Ingresar
          </button>
        </div>
      </div>
    </div>
  );
}

import { RegisterForm } from "./RegisterForm";
import "./index.css";
import { Topbar } from "../../components/Topbar";

export default function RegisterScreen() {
  return (
    <div className="LoginScreen">
      <Topbar />
      <RegisterForm />
    </div>
  );
}

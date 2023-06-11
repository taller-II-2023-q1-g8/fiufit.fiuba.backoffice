import { LoginScreen } from "./layout";
import { useState } from "react";
import { fetchAdminByEmail } from "../../requests";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config";

export default function LoginScreenContainer() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    const userData = (await fetchAdminByEmail(email)).message;
    if (userData) {
      signInWithEmailAndPassword(auth, email, password)
        .then(() => console.info("Signed in"))
        .catch((error) => console.error(error));
    } else {
      console.log("No es admin");
    }
  };

  return (
    <LoginScreen
      setEmail={setEmail}
      setPassword={setPassword}
      handleSubmit={handleSubmit}
    />
  );
}

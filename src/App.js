import "./App.css";

import LoginScreen from "./screens/Login";
import { createContext, useState } from "react";
import { auth } from "./config";
import { signOut } from "firebase/auth";

import { ApplicationRoutes } from "./Routes";

export const userContext = createContext();
export const signOutContext = createContext();

const logout = () => signOut(auth);

function App() {
  const [currentUser, setCurrentUser] = useState(auth.currentUser);
  auth.onAuthStateChanged(() => {
    setCurrentUser(auth.currentUser);
  });

  return (
    <userContext.Provider value={currentUser}>
      <signOutContext.Provider value={logout}>
        {currentUser !== null ? <ApplicationRoutes /> : <LoginScreen />}
      </signOutContext.Provider>
    </userContext.Provider>
  );
}

export default App;

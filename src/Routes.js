import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AdminsScreen } from "./screens/admins/admins";
import { Users } from "./screens/Users";
import RegisterScreen from "./screens/register";
import { HomeScreen } from "./screens/Home";
import { Plans } from "./screens/Plans";

export const ApplicationRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/users/*" element={<Users />} />
        <Route path="/plans/*" element={<Plans />} />
        <Route path="/admins" element={<AdminsScreen />} />
        <Route path="/admins/add" element={<RegisterScreen />} />
        <Route path="*" element={<HomeScreen />} />
      </Routes>
    </Router>
  );
};

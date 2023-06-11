import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AdminsScreen } from "./screens/admins/admins";
import { PlansScreen } from "./screens/plans";
import { Users } from "./screens/Users";
import RegisterScreen from "./screens/register";
import { HomeScreen } from "./screens/Home";

export const ApplicationRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/users/*" element={<Users />} />
        <Route path="/plans" element={<PlansScreen />} />
        <Route path="/admins" element={<AdminsScreen />} />
        <Route path="/admins/add" element={<RegisterScreen />} />
        <Route path="*" element={<HomeScreen />} />
      </Routes>
    </Router>
  );
};

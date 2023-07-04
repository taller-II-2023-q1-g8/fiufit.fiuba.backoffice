import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AdminsScreen } from "./screens/Admins";
import { Users } from "./screens/Users";
import { HomeScreen } from "./screens/Home";
import { Plans } from "./screens/Plans";
import Metrics from "./screens/Metrics";

export const ApplicationRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/users/*" element={<Users />} />
        <Route path="/metrics" element={<Metrics />} />
        <Route path="/plans/*" element={<Plans />} />
        <Route path="/admins/*" element={<AdminsScreen />} />
        <Route path="*" element={<HomeScreen />} />
      </Routes>
    </Router>
  );
};

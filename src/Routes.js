import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AdminsScreen } from "./screens/Admins";
import { Users } from "./screens/Users";
import { HomeScreen } from "./screens/Home";
import { Plans } from "./screens/Plans";
import Metrics from "./screens/Metrics";
import { Verifications } from "./screens/Verifications";
import { Services } from "./screens/Services";

export const ApplicationRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/users/*" element={<Users />} />
        <Route path="/metrics" element={<Metrics />} />
        <Route path="/plans/*" element={<Plans />} />
        <Route path="/services/*" element={<Services />} />
        <Route path="/admins/*" element={<AdminsScreen />} />
        <Route path="/verifications" element={<Verifications />} />
        <Route path="*" element={<HomeScreen />} />
      </Routes>
    </Router>
  );
};

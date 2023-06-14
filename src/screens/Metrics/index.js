import React, { Fragment, useEffect, useState } from "react";
import { Topbar } from "../../components/Topbar";
import "./styles.css";
import {
  fetchAllAdmins,
  fetchAllAthletes,
  fetchAllPlans,
  fetchAllUsers,
} from "../../requests";
import UserMetrics from "./UserMetrics";
import Loader from "../../components/Loader";
import AdminMetrics from "./AdminMetrics";

const Metrics = () => {
  const [loading, setLoading] = useState(true);
  const [usersData, setUsersData] = useState({});
  const [plansData, setPlansData] = useState({});
  const [athletesData, setAthletesData] = useState({});
  const [adminsData, setAdminsData] = useState({});

  useEffect(() => {
    async function fetchData() {
      const allUsers = (await fetchAllUsers()).message;
      setUsersData(allUsers);
      const allPlans = (await fetchAllPlans()).message;
      setPlansData(allPlans);
      const allAthletes = (await fetchAllAthletes()).message;
      setAthletesData(allAthletes);
      const allAdmins = (await fetchAllAdmins()).message;
      setAdminsData(allAdmins);

      setLoading(false);
    }
    fetchData();
  }, []);

  return (
    <div>
      <div className="Container">
        <Topbar />
        <div className="HomeDataContainer">
          <h1>Métricas</h1>
          {loading ? (
            <Loader />
          ) : (
            <Fragment>
              <UserMetrics
                usersData={usersData}
                plansData={plansData}
                athletesData={athletesData}
              />
              <AdminMetrics usersData={usersData} adminsData={adminsData} />
            </Fragment>
          )}
        </div>
      </div>
    </div>
  );
};

/* 
- Usuarios que crearon planes
- Average Number of Users Followed
-Average Plans Created per Trainer
- Trainer with the Best Rated Plan
-Trainer with the Worst Rated Plan
-Average Plans Followed per Athlete */

export default Metrics;

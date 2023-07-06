import React, { Fragment, useEffect, useState } from "react";
import { Topbar } from "../../components/Topbar";
import styles from "./styles.module.scss";
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
      try {
        const allUsers = await fetchAllUsers();
        setUsersData(allUsers.message);
        const allPlans = await fetchAllPlans();
        setPlansData(allPlans);
        const allAthletes = await fetchAllAthletes();
        setAthletesData(allAthletes);
        const allAdmins = await fetchAllAdmins();
        setAdminsData(allAdmins.message);
      } catch (error) {
        console.log({ error });
        window.location.href = "/";
      }
      setLoading(false);
    }
    fetchData();
  }, []);

  return (
    <div>
      <div className={styles.pageContainer}>
        <Topbar />
        <div className={styles.container}>
          <h1>Métricas</h1>
          {loading ? (
            <Loader />
          ) : usersData ? (
            <Fragment>
              {plansData && athletesData ? (
                <UserMetrics
                  usersData={usersData}
                  plansData={plansData}
                  athletesData={athletesData}
                />
              ) : (
                "No se han podido recuperar los datos"
              )}
              <AdminMetrics usersData={usersData} adminsData={adminsData} />
            </Fragment>
          ) : (
            "No se han podido recuperar los datos"
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

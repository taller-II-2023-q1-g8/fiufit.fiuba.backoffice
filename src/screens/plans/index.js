import { Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { userContext } from "../../App";
import { fetchAllPlans } from "../../requests";
import "./index.css";

export const PlansScreen = () => {
    const userData = useContext(userContext);
    const [plans, setPlans] = useState([]);


    useEffect(() => {
        async function fetchData(){
            const allPlans = (await fetchAllPlans()).message;
            if (allPlans) {
                setPlans(allPlans)
            }
        }
        fetchData();
    }, []);

    return (
        <div className="Container">
            <div className="Nav">
                <Link className="FiuFitContainer" to="/">
                    <h1>FiuFit</h1>
                    <h2>Back Office</h2>
                </Link>
                <h2 className="Email">{userData.email}</h2>
            </div>
            <div className="HomeDataContainer">
                <h1>Planes de Entrenamiento</h1>
                <table className="PlansTable">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Título</th>
                            <th>Creación</th>
                            <th>Modificación</th>
                        </tr>
                    </thead>
                    {plans.map((plan) => (
                        <tr key={plan.id}>
                            <td>{plan.id}</td>
                            <td>{plan.title}</td>
                            <td>{new Date(plan.created_at).toLocaleString()}</td>
                            <td>{new Date(plan.updated_at).toLocaleString()}</td>
                        </tr>
                    ))
                    }
                </table>
            </div>
        </div>
    )
}
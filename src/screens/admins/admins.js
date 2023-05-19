import { Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { userContext } from "../../App";
import { fetchAllUsers } from "../../requests";
import { UserEntry } from "../users/UserEntry";


export const AdminsScreen = () => {
    const userData = useContext(userContext);
    const [admins, setAdmins] = useState([]);


    useEffect(() => {
        async function fetchData(){
            const allUsers = (await fetchAllUsers()).message;
            setAdmins(allUsers.filter((user) => user.is_admin))
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
                <h1>Administradores</h1>
                <Link to="/admins/add">
                    <button className="SubmitButton" style={{marginBottom: 10, backgroundColor: '#30B3E5' }}> Agregar </button>
                </Link>
                <table className="UsersTable">
                    <thead>
                        <tr>
                            <th>Username</th>
                            <th>Nombre</th>
                            <th>Apellido</th>
                            <th>Correo</th>
                        </tr>
                    </thead>
                    {admins.sort((a,b) => a.username.localeCompare(b.username))
                        .slice(0,18).map((user) => 
                        <UserEntry key={user.username} user={user}/>)}
                </table>
            </div>
        </div>
    )
}
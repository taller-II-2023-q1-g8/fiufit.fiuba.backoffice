import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchAllAdmins } from "../../requests";
import { Topbar } from "../../components/Topbar";
import { UserEntry } from "./UserEntry";


export const AdminsScreen = () => {
    const [admins, setAdmins] = useState([]);

    useEffect(() => {
        async function fetchData(){
            const allAdmins = (await fetchAllAdmins()).message;
            setAdmins(allAdmins)
        }
        fetchData();
    }, []);

    return (
        <div className="Container">
            <Topbar />
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
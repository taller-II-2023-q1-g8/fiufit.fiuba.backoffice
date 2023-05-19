import {RegisterForm} from './RegisterForm';
import './index.css';
import { useContext } from "react";
import { userContext } from "../../App";
import { Link } from "react-router-dom";


export default function RegisterScreen(){
    const userData = useContext(userContext);
    return (
        
        <div className="LoginScreen">
            <div className="Nav">
                <Link className="FiuFitContainer" to="/">
                    <h1>FiuFit</h1>
                    <h2>Back Office</h2>
                </Link>
                <h2 className="Email">{userData.email}</h2>
            </div>
            <RegisterForm />
        </div>
    );
}
import { TextField } from "../../components/TextField"
import { useState } from "react"
import { fetchData, fetchUserByEmail } from "../../requests"
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from "../../config"


export function LoginForm() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async () => {
        const userData = (await fetchUserByEmail(email)).message;
        if (userData && userData.is_admin){
            signInWithEmailAndPassword(auth, email, password)
                .then(() => console.info("Signed in"))
                .catch((error) => console.error(error))
        } else {
            console.log('No es admin')
        }
    }

    return (
        <div className="LoginFormContainer">
            <h1>FiuFit</h1>
            <h2>Back Office</h2>
            <div className="LoginForm">
                <TextField label='Email' onChange={setEmail} placeholder='Ingrese su email'/>
                <TextField label='Contraseña' onChange={setPassword} type='password'  placeholder='Ingrese su contraseña'/>
                <div className="ButtonContainer">
                    {/* <button className="RegisterButton">Registrate</button> */}
                    <button className="SubmitButton" onClick={handleSubmit}>Ingresar</button>
                </div>
            </div>
        </div>
    )
}
import { useState } from "react";
import { TextField } from "../../../components/TextField";
import { registerAdmin } from "../../../requests";
import styles from "./styles.module.scss";

export default function AddAdmin() {
  const [currentStep, setCurrentStep] = useState(1);
  const [email, setEmail] = useState("");
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [gender, setGender] = useState("");
  const [phone, setPhone] = useState("");
  const [birthday, setBirthday] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");

  const handleSubmit = () => {
    const inputData = {
      username: user,
      firstname: name,
      gender: gender,
      email: email,
      phone_number: phone,
      lastname: lastname,
      birth_date: birthday,
      password: password,
      weight_in_kg: weight,
      height_in_cm: height,
      is_federated: false,
      is_admin: true,
    };

    registerAdmin(inputData).then((response) => {
      console.info(response);
    });
  };
  const prevStep = () => setCurrentStep((c) => (c > 1 ? c - 1 : c));
  const nextStep = () => {
    switch (currentStep) {
      case 1:
        if (email && user && password) {
          setCurrentStep(2);
          return;
        }
        break;
      case 2:
        if (name && lastname && gender && phone) {
          setCurrentStep(3);
          return;
        }
        break;
      case 3:
        if (birthday && height && weight) {
          handleSubmit();
          return;
        }
        break;
      default:
        break;
    }

    alert("Por favor complete todos los campos");
  };

  const fields1 = [
    <TextField
      key="Email"
      label="Email"
      onChange={setEmail}
      placeholder="Email"
      defaultValue={email}
    />,
    <TextField
      key="Usuario"
      label="Usuario"
      onChange={setUser}
      placeholder="Usuario"
      defaultValue={user}
    />,
    <TextField
      key="Contraseña"
      label="Contraseña"
      onChange={setPassword}
      type="password"
      placeholder="Contraseña"
      defaultValue={password}
    />,
  ];

  const fields2 = [
    <TextField
      key="Nombre"
      label="Nombre"
      onChange={setName}
      placeholder="Nombre"
      defaultValue={name}
    />,
    <TextField
      key="Apellido"
      label="Apellido"
      onChange={setLastname}
      placeholder="Apellido"
      defaultValue={lastname}
    />,
    <TextField
      key="Genero"
      label="Genero"
      onChange={setGender}
      placeholder="Género"
      defaultValue={gender}
    />,
    <TextField
      key="Telefono"
      label="Telefono"
      onChange={setPhone}
      placeholder="Número de telefono"
      defaultValue={phone}
    />,
  ];

  const fields3 = [
    <TextField
      key="Fecha"
      label="Fecha de nacimiento"
      onChange={setBirthday}
      placeholder="Fecha de nacimiento"
      defaultValue={birthday}
    />,
    <TextField
      key="Altura"
      label="Altura"
      onChange={setHeight}
      placeholder="Altura en cm"
      defaultValue={height}
    />,
    <TextField
      key="Peso"
      label="Peso"
      onChange={setWeight}
      placeholder="Peso en Kg"
      defaultValue={weight}
    />,
  ];

  return (
    <div className={styles.container}>
      {currentStep === 1 && fields1}
      {currentStep === 2 && fields2}
      {currentStep === 3 && fields3}
      <div className={styles.buttonsContainer}>
        {currentStep > 1 && (
          <button className={styles.button} onClick={prevStep}>
            Anterior
          </button>
        )}
        <button className={styles.button} onClick={nextStep}>
          {currentStep === 3 ? "Terminar!" : "Siguiente"}
        </button>
      </div>
    </div>
  );
}

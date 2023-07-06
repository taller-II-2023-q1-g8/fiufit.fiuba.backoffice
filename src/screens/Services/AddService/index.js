import { useState } from "react";
import { TextField } from "../../../components/TextField";
import { registerAdmin, registerService } from "../../../requests";
import styles from "./styles.module.scss";

export default function AddService() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = () => {
    const inputData = {
      name,
      description,
    };

    registerService(name, description).then((response) => {
      if (!response.ok) alert("Por favor complete todos los campos");
      else {
        alert("Registro exitoso!");
        window.location.href = "/";
      }
    });
  };

  const fields = [
    <TextField
      key="Name"
      label="Nombre"
      onChange={setName}
      placeholder=""
      defaultValue={name}
    />,
    <TextField
      key="Description"
      label="Descripción"
      onChange={setDescription}
      placeholder=""
      defaultValue={description}
    />,
  ];

  return (
    <div className={styles.container}>
      {fields}
      <div className={styles.buttonsContainer}>
        <button className={styles.button} onClick={handleSubmit}>
          {"Terminar!"}
        </button>
      </div>
    </div>
  );
}

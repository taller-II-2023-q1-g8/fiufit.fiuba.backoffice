import React from "react";
import { Link } from "react-router-dom";

export const ServiceEntry = ({ service }) => {
  const { name, state } = service;

  return (
    <tr>
      <td>
        <Link
          style={{
            textDecoration: "none",
            color: "var(--main)",
            fontWeight: "bold",
          }}
          to={`/services/${name}`}
        >
          {name}
        </Link>
      </td>
      <td
        style={{
          color: state === "blocked" ? "#ff2424" : "rgb(30 255 0)",
          fontWeight: 400,
        }}
      >
        {state === "blocked" ? "Bloqueado" : "Activado"}
      </td>
    </tr>
  );
};

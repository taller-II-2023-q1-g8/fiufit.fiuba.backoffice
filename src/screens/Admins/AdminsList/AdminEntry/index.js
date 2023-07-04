import React from "react";
import { Link } from "react-router-dom";

export const AdminEntry = ({ admin }) => {
  const { username, firstname, lastname, email } = admin;

  return (
    <tr>
      <td>
        <Link
          style={{
            textDecoration: "none",
            color: "var(--main)",
            fontWeight: "bold",
          }}
          to={`/admins/${username}`}
        >
          {username}
        </Link>
      </td>
      <td>{firstname}</td>
      <td>{lastname}</td>
      <td>{email}</td>
    </tr>
  );
};

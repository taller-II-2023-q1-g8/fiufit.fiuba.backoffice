import React from "react";
import { Link } from "react-router-dom";

export const UserEntry = ({ user }) => {
  const { username, firstname, lastname, email } = user;

  return (
    <tr>
      <td>
        <Link
          style={{
            textDecoration: "none",
            color: "var(--main)",
            fontWeight: "bold",
          }}
          to={`/users/${username}`}
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

import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.scss";

export const UserEntry = ({ user }) => {
  const { username, firstname, lastname, email } = user;

  return (
    <tr>
      <td>
        <Link className={styles.link} to={`/users/${username}`}>
          {username}
        </Link>
      </td>
      <td>{firstname}</td>
      <td>{lastname}</td>
      <td>{email}</td>
    </tr>
  );
};

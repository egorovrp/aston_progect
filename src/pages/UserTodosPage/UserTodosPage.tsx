import React from "react";
import { useParams } from "react-router-dom";
import UserTabs from "../../widgets/UserTabs/UserTabs";
import styles from "./UserTodosPage.module.css";

const UserTodosPage: React.FC = () => {
  const { id } = useParams();
  return (
    <div className={styles.container}>
      <h1>User {id} Todos</h1>
      <UserTabs userId={id} />
      <p>Todos placeholder</p>
    </div>
  );
};

export default UserTodosPage;

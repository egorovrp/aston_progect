import React from "react";
import { useParams, Link } from "react-router-dom";
import UserTabs from "../../widgets/UserTabs/UserTabs";
import styles from "./UserAlbumsPage.module.css";

const UserAlbumsPage: React.FC = () => {
  const { id } = useParams();
  return (
    <div className={styles.container}>
      <h1>Альбомы {id} пользователя</h1>
      <UserTabs userId={id} />
      <p>Имитация списка альбомов</p>
      <Link to={`/users/${id}/posts`}>К постам {id} пользователя</Link>
    </div>
  );
};

export default UserAlbumsPage
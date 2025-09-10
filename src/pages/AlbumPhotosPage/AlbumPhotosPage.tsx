import React from "react";
import { useParams } from "react-router-dom";
import styles from "./AlbumPhotosPage.module.css";

const AlbumPhotosPage: React.FC = () => {
  const { id } = useParams();
  return (
    <div className={styles.container}>
      <h1>Фото {id} альбома</h1>
      <p>Имитация фотографии</p>
    </div>
  );
};

export default AlbumPhotosPage;

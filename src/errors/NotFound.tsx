import React from "react";
import { Link } from "react-router-dom";
import styles from "./NotFound.module.css";

const NotFound: React.FC = () => (
  <div className={styles.notFoundContainer}>
    <h1 className={styles.notFoundTitle}>404 — Страница не найдена</h1>
    <p className={styles.notFoundText}>Запрошенный маршрут не существует.</p>
    <Link to="/posts" className={styles.notFoundLink}>
      На список постов
    </Link>
  </div>
);

export default NotFound;

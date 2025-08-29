import { type FC } from "react";
import styles from "./Footer.module.css";

export const Footer: FC = () => (
  <footer className={styles.footer}>
    <ul>
      <li>
        <a href="#" target="_blank">
          GitHub
        </a>
      </li>
    </ul>
    <p>&copy; 2025 Все права защищены</p>
  </footer>
);

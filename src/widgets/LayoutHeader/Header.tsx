import { type FC } from 'react';
import styles from './Header.module.css';
import logo from './Logo.jpg'

export const Header: FC = () => (
  <header className={styles.header}>
    <img className={styles.logotype} src={logo} alt="Logotype" />
    <h1 className={styles.heading}>Приложение для просмотра постов и комментариев</h1>
  </header>
);

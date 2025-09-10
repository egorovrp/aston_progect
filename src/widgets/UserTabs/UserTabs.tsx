import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './UserTabs.module.css';

type Props = { userId?: string };

const UserTabs: React.FC<Props> = ({ userId }) => {
  if (!userId) return null;

  const base = `/users/${encodeURIComponent(userId)}`;

  return (
    <nav className={styles.tabs}>
      <NavLink to={`${base}/posts`} className={({ isActive }) => isActive ? styles.active : styles.link}>Posts</NavLink>
      <NavLink to={`${base}/albums`} className={({ isActive }) => isActive ? styles.active : styles.link}>Albums</NavLink>
      <NavLink to={`${base}/todos`} className={({ isActive }) => isActive ? styles.active : styles.link}>Todos</NavLink>
    </nav>
  );
};

export default UserTabs


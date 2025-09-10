import React from 'react';
import styles from './ErrorMessage.module.css';

type Props = {
  message: string;
  onRetry?: () => void;
};

export const ErrorMessage: React.FC<Props> = ({ message, onRetry }) => (
  <div className={styles.error}>
    <div>{message}</div>
    {onRetry && <button className={styles.btn} onClick={onRetry}>Повторить</button>}
  </div>
);

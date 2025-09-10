import React, { type ButtonHTMLAttributes } from "react";
import styles from "./Button.module.css";
import { useTheme } from "../../lib/theme/ThemeProvider";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: React.ReactNode;
  className?: string;
};

export const Button: React.FC<ButtonProps> = ({ className = "", ...rest }) => {
  const { theme } = useTheme();

  return (
    <button
      {...rest}
      className={`${styles.btn} ${
        theme === "dark" ? styles.dark : ""
      } ${className}`}
    />
  );
};

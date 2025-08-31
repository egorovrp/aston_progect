import { type FC, useState } from "react";
import styles from "./Header.module.css";
import logo from "../../../public/logo.jpg";
import { Button } from "../../shared/ui/button/Button";
import { useTheme } from "../../shared/lib/theme/ThemeProvider";
import { Modal } from "../../shared/ui/modal/Modal";

export const Header: FC = () => {
  const { toggleTheme, theme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const handleModalClose = () => {
    setIsOpen(false);
  };

  const handleAboutClick = () => {
    setIsOpen(true);
  };

  const modalContent =
    "Этот проект был создан для того, чтобы практиковать и совершенствовать знания библиотеки REACT на практике";

  return (
    <header
      className={`${styles.header} ${theme === "dark" ? styles.dark : ""}`}
    >
      <img className={styles.logotype} src={logo} alt="Logotype" />
      <h1
        className={`${styles.heading} ${theme === "dark" ? styles.dark : ""}`}
      >
        Приложение для просмотра постов и комментариев
      </h1>
      <Modal isOpen={isOpen} onClose={handleModalClose}>
        {modalContent}
      </Modal>
      <Button onClick={handleAboutClick}>О проекте</Button>
      <Button onClick={toggleTheme}>Смена темы</Button>
    </header>
  );
};

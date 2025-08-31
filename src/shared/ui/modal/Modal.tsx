import React, { type ReactNode, useEffect } from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.module.css";

const portalRoot =
  typeof document !== "undefined"
    ? document.getElementById("modal-root")
    : null;

export type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  title?: string;
  className?: string;
};

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  title,
  className = "",
}) => {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isOpen, onClose]);

  if (!isOpen || !portalRoot) return null;
  return ReactDOM.createPortal(
    <div className={styles.modalOverlay} onMouseDown={onClose}>
      <div
        className={`${styles.modalContent} ${className}`}
        onMouseDown={(e) => e.stopPropagation()}
      >
        <button type="button" className={styles.modalClose} onClick={onClose}>
          ×
        </button>
        {title && <h2>{title}</h2>}
        <div className={styles.modalBody}>{children}</div>
      </div>
    </div>,
    portalRoot
  );
};

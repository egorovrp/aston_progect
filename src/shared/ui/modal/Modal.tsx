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
  className?: string;
};

type Components = {
  (props: ModalProps): ReactNode;
  Header: React.FC<{ children: ReactNode; className?: string }>;
  Body: React.FC<{ children: ReactNode; className?: string }>;
  Footer: React.FC<{ children: ReactNode; className?: string }>;
};

export const Modal: Components = ({
  isOpen,
  onClose,
  children,
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
        {children}
      </div>
    </div>,
    portalRoot
  );
};

const Header: React.FC<{ children: ReactNode; className?: string }> = ({
  children,
  className = "",
}) => {
  return <div className={`${styles.modalHeader} ${className}`}>{children}</div>;
};

const Body: React.FC<{ children: ReactNode; className?: string }> = ({
  children,
  className = "",
}) => {
  return <div className={`${styles.modalBody} ${className}`}>{children}</div>;
};

const Footer: React.FC<{ children: ReactNode; className?: string }> = ({
  children,
  className = "",
}) => {
  return <div className={`${styles.modalFooter} ${className}`}>{children}</div>;
};

Modal.Header = Header;
Modal.Body = Body;
Modal.Footer = Footer;

import { type FC, type PropsWithChildren } from "react";
import styles from "./MainLayout.module.css";
import { Header } from "../../widgets/LayoutHeader/Header";
import { Footer } from "../../widgets/LayoutFooter/Footer";

export const MainLayout: FC<PropsWithChildren> = ({ children }) => (
  <div className={styles.layout}>
    <Header />
    <main className={styles.main}>{children}</main>
    <Footer />
  </div>
);

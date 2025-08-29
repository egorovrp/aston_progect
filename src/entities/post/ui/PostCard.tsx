import { type FC } from "react";
import styles from "./PostCard.module.css";

interface PostCardProps {
  title: string;
  content: string;
}

export const PostCard: FC<PostCardProps> = ({ title, content }) => (
  <div className={styles.card}>
    <h3>{title}</h3>
    <p>{content}</p>
  </div>
);

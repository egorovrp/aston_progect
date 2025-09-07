import { type FC } from "react";
import styles from "./PostCard.module.css";
import { CommentList } from "../../../widgets/CommentList/ui/CommentList";
interface Comment {
  id: string;
  text: string;
  author?: string;
}
interface PostCardProps {
  title: string;
  content: string;
  comments: Comment[];
}

export const PostCard: FC<PostCardProps> = ({ title, content, comments }) =>{
  return (
  <div className={styles.card}>
    <h3>{title}</h3>
    <p>{content}</p>
    <p><CommentList comments={comments}/></p>
  </div>
);
}
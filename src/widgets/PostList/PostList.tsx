import { type FC, Fragment } from "react";
import styles from "./PostList.module.css";
import { PostCard } from "../../entities/post/ui/PostCard";

interface Post {
  id: number;
  title: string;
  content: string;
}

interface PostListProps {
  posts: Post[];
}

export const PostList: FC<PostListProps> = ({ posts }) => (
  <div className={styles.list}>
    {posts.map((post) => (
      <Fragment key={post.id}>
        <PostCard title={post.title} content={post.content} />
      </Fragment>
    ))}
  </div>
);

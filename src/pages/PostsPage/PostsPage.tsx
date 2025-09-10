import React from "react";
import { Link } from "react-router-dom";
import { usePosts } from "../../features/PostList/model/hooks/usePosts";
import styles from "./PostsPage.module.css";
import { ErrorMessage } from "../../shared/ui/errorMessage/ErrorMessage";
import { Loader } from "../../shared/ui/loader/Loader";

export const PostsPage: React.FC = () => {
  const { posts, loading, error, refetch } = usePosts();

  if (loading) return <Loader />;
  if (error) return <ErrorMessage message={error} onRetry={refetch} />;

  return (
    <div className={styles.container}>
      <h1>Посты</h1>
      {posts && posts.length > 0 ? (
        <ul className={styles.list}>
          {posts.map((p) => (
            <li key={p.id} className={styles.item}>
              <Link to={`/posts/${p.id}`} className={styles.title}>
                {p.title}
              </Link>
              <div className={styles.meta}>Пользователь #{p.userId}</div>
            </li>
          ))}
        </ul>
      ) : (
        <div>Нет постов</div>
      )}
    </div>
  );
};

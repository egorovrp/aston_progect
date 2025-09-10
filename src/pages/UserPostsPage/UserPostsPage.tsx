import React from "react";
import { Link, useParams } from "react-router-dom";
import UserTabs from "../../widgets/UserTabs/UserTabs";
import styles from "./UserPostsPage.module.css";
import { ErrorMessage } from "../../shared/ui/errorMessage/ErrorMessage";
import { Loader } from "../../shared/ui/loader/Loader";
import { usePosts } from "../../features/PostList/model/hooks/usePosts";

export const UserPostsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { posts, loading, error, refetch } = usePosts(id);

  if (!id) return <div>Неправильный id пользователя</div>;
  if (loading) return <Loader />;
  if (error) return <ErrorMessage message={error} onRetry={refetch} />;

  return (
    <div className={styles.container}>
      <h1>User {id} posts</h1>
      <UserTabs userId={id} />
      {posts && posts.length > 0 ? (
        <ul className={styles.list}>
          {posts.map((p) => (
            <li key={p.id} className={styles.item}>
              <Link to={`/posts/${p.id}`} className={styles.title}>
                {p.title}
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <div>У пользователя нет постов</div>
      )}
    </div>
  );
};

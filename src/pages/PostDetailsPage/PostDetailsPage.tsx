import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import styles from "./PostDetailsPage.module.css";
import type { Post } from "../../shared/types";
import { Loader } from "../../shared/ui/loader/Loader";
import { ErrorMessage } from "../../shared/ui/errorMessage/ErrorMessage";

export const PostDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;
    const fetchPost = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${encodeURIComponent(id)}`
        );
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data: Post = await res.json();
        setPost(data);
      } catch (e) {
        const message = e instanceof Error ? e.message : String(e);
        setError(message);
      } finally {
        setLoading(false);
      }
    };
    fetchPost();
  }, [id]);

  if (!id) return <div>Неправильный id поста</div>;
  if (loading) return <Loader />;
  if (error) return <ErrorMessage message={error} />;

  if (!post) return <div>Пост не найден</div>;

  return (
    <div className={styles.container}>
      <Link to="/posts" className={styles.back}>
        ← Вернуться к постам
      </Link>
      <h1 className={styles.title}>{post.title}</h1>
      <div className={styles.meta}>Пользователь #{post.userId}</div>
      <p className={styles.body}>{post.body}</p>
    </div>
  );
};

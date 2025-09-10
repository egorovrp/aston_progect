import { useCallback, useEffect, useState } from "react";
import { type Post } from "../../../../shared/types";

type UsePostsResult = {
  posts: Post[] | null;
  loading: boolean;
  error: string | null;
  refetch: () => void;
};

export function usePosts(userId?: string | number): UsePostsResult {
  const [posts, setPosts] = useState<Post[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchPosts = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const base = "https://jsonplaceholder.typicode.com/posts";
      const url =
        userId !== undefined && userId !== null
          ? `${base}?userId=${encodeURIComponent(String(userId))}`
          : base;
      const res = await fetch(url);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data: Post[] = await res.json();
      setPosts(data);
    } catch (e) {
      const message = e instanceof Error ? e.message : String(e);
      setError(message);
      setPosts([]);
    } finally {
      setLoading(false);
    }
  }, [userId]);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  return {
    posts,
    loading,
    error,
    refetch: fetchPosts,
  };
}

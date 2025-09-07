import { type FC, Fragment, useState, useCallback, useMemo } from "react";
import styles from "./PostList.module.css";
import { PostCard } from "../../entities/post/ui/PostCard";
import { PostLengthFilter } from "../../features/PostLengthFilter/ui/PostLengthFilter";
import { filterByLength } from "../../features/PostLengthFilter/lib/filterByLength";
interface Comment {
  id: string;
  text: string;
  author?: string;
}
interface Post {
  id: number;
  title: string;
  content: string;
  comments: Comment[];
}

interface PostListProps {
  posts: Post[];
}

export const PostList: FC<PostListProps> = ({ posts }) => {
  const [min, setMin] = useState<number>();
  const [max, setMax] = useState<number>();

  const handleFilterChange = useCallback((min?: number, max?: number) => {
    setMin(min);
    setMax(max);
  }, []);

  const filteredPosts = useMemo(() => {
    return filterByLength(posts, min, max);
  }, [posts, min, max]);

  return (
    <div className={styles.list}>
      <PostLengthFilter
        valueMin={min}
        valueMax={max}
        onChange={handleFilterChange}
      />
      {filteredPosts.map((post) => (
        <Fragment key={post.id}>
          <PostCard
            title={post.title}
            content={post.content}
            comments={post.comments}
          />
        </Fragment>
      ))}
    </div>
  );
};

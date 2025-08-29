import { type FC } from 'react';
import styles from './PostList.module.css';
import { PostCard } from '../../entities/post/ui/PostCard';

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
    {posts.map(post => (
      <PostCard key={post.id} title={post.title} content={post.content} />
    ))}
  </div>
);

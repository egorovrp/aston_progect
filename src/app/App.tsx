import { type FC, useState, useEffect } from "react";
import { MainLayout } from "../shared/layouts/MainLayout";
import { PostList } from "../widgets/PostList/PostList";
import { ThemeProvider } from "../shared/lib/theme/ThemeProvider";
import { posts } from "../shared/mocks/posts";
import { withLoading } from "../shared/lib/hoc/withLoading";

const PostListWithLoading = withLoading(PostList)

export const App: FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 2000);

    return () => {
      clearTimeout(timer);
    }
  }, [])

  return (
    <ThemeProvider defaultTheme="light">
      <MainLayout>
        <PostListWithLoading isLoading={!isLoaded} posts={posts} />
      </MainLayout>
    </ThemeProvider>
  );
};

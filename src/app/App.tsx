import { type FC } from "react";
import { MainLayout } from "../shared/layouts/MainLayout";
import { PostList } from "../widgets/PostList/PostList";

export const App: FC = () => {
  const posts = [
    { id: 1, title: "Первый пост", content: "Текст первого поста" },
    { id: 2, title: "Второй пост", content: "Текст второго поста" },
    { id: 3, title: "Третий пост", content: "Текст третьего поста" },
    { id: 4, title: "Четвёртый пост", content: "Текст четвёртого поста" },
    { id: 5, title: "Пятый пост", content: "Текст пятого поста" },
    { id: 6, title: "Шестой пост", content: "Текст шестого поста" },
  ];

  return (
    <MainLayout>
      <PostList posts={posts} />
    </MainLayout>
  );
};

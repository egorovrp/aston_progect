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

export const posts: Post[] = [
  {
    id: 1,
    title: "Первый пост про JavaScript",
    content: "Текст первого поста",
    comments: [
      { id: "1", text: "Первый комментарий 1 поста", author: "Кирилл" },
      { id: "2", text: "Второй комментарий 1 поста", author: "Ольга" },
      { id: "3", text: "Третий комментарий 1 поста", author: "Анна" },
    ],
  },
  {
    id: 2,
    title: "Второй пост про React",
    content: "Текст второго поста",
    comments: [
      { id: "1", text: "Первый комментарий 2 поста", author: "Кирилл" },
      { id: "2", text: "Второй комментарий 2 поста", author: "Ольга" },
      { id: "3", text: "Третий комментарий 2 поста", author: "Анна" },
    ],
  },
  {
    id: 3,
    title: "Третий пост про библиотеки",
    content: "Текст третьего поста",
    comments: [
      { id: "1", text: "Первый комментарий 3 поста", author: "Кирилл" },
      { id: "2", text: "Второй комментарий 3 поста", author: "Ольга" },
      { id: "3", text: "Третий комментарий 3 поста", author: "Анна" },
    ],
  },
  {
    id: 4,
    title: "Четвёртый пост про программирование",
    content: "Текст четвёртого поста",
    comments: [
      { id: "1", text: "Первый комментарий 4 поста", author: "Кирилл" },
      { id: "2", text: "Второй комментарий 4 поста", author: "Ольга" },
      { id: "3", text: "Третий комментарий 4 поста", author: "Анна" },
    ],
  },
  {
    id: 5,
    title: "Пятый пост про TypeScript",
    content: "Текст пятого поста",
    comments: [
      { id: "1", text: "Первый комментарий 5 поста", author: "Кирилл" },
      { id: "2", text: "Второй комментарий 5 поста", author: "Ольга" },
      { id: "3", text: "Третий комментарий 5 поста", author: "Анна" },
    ],
  },
  {
    id: 6,
    title: "Шестой пост про хуки",
    content: "Текст шестого поста",
    comments: [
      { id: "1", text: "Первый комментарий 6 поста", author: "Кирилл" },
      { id: "2", text: "Второй комментарий 6 поста", author: "Ольга" },
      { id: "3", text: "Третий комментарий 6 поста", author: "Анна" },
    ],
  },
];

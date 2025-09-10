import { useState, useEffect } from "react";

export type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export const generateTodos = (userId: number, count = 12): Todo[] =>
  Array.from({ length: count }).map((_, i) => ({
    userId,
    id: userId * 100 + i + 1,
    title: `Мок задача ${i + 1} для пользователя ${userId}`,
    completed: i % 3 === 0, // примерно треть завершены
  }));

export function useUserTodosMock(userId?: string | null, delay = 500) {
  const [todos, setTodos] = useState<Todo[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!userId) return;
    setLoading(true);
    setError(null);

    const t = setTimeout(() => {
      // Для тестирования ошибки раскомментируйте:
      // setError('Ошибка загрузки (мок)');
      // setTodos([]);
      // setLoading(false);
      // return;

      const uid = Number(userId) || 1;
      setTodos(generateTodos(uid, 10));
      setLoading(false);
    }, delay);

    return () => clearTimeout(t);
  }, [userId, delay]);

  return { todos, loading, error, setTodos, setError };
}

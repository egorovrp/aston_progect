Домашнее задание №1

1. Инициализирован проект с помощью Vite + TypeScript.

2. Созданы:
   - App.tsx → src/app/
   - MainLayout.tsx → src/shared/layouts/
   - Header, Footer → src/widgets/LayoutHeader/, LayoutFooter/

3. Создан список постов-заглушек:
   - PostList → src/widgets/PostList/
   - PostCard → src/entities/post/ui/PostCard.tsx

4. Передача данных между компонентами через props (список постов).

5. Созданы Css Modules для стилизации компонентов.

6. Создан файл .gitattributes для устранения проблемы переноса строк.

7. Отредактирован файл README.md

Домашнее задание №2 

1. Реализовано переключение темы в проекте через контекст.

2. Добавлено модальное окно с информацией о проекте, которое открывается по кнопке "О проекте".

Домашнее задание №3

Реализовано отображение модального окна с использованием compound components, добавлена фильтрация постов по длине заголовка, свертывание комментариев и оптимизация через HOC и хуки.

1. Compound Components:
   - Modal с подкомпонентами (Header, Body, Footer) → src/shared/ui/Modal/

2. HOC withLoading:
   - HOC → src/shared/lib/hoc/
   - Применяется к PostList

3. Свертывание/разворачивание комментариев:
  - CommentList.tsx → src/widgets/CommentList/ui/
  - Использованы useState, useCallback

4. Добавлена фильтрация по длине заголовка:
  - PostLengthFilter → src/features/PostLengthFilter/ui/
  - filterByLength.ts → src/features/PostLengthFilter/lib/

5. Использованы useMemo, useCallback в PostList
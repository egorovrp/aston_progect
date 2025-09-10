import { useState, useCallback, type FC, memo } from "react";
import styles from "./CommentList.module.css";

type Comment = { id: string; text: string; author?: string };
type Props = { comments: Comment[]; initialCollapsed?: boolean };

export const CommentList: FC<Props> = memo(
  ({ comments, initialCollapsed = true }) => {
    const [collapsed, setCollapsed] = useState<boolean>(initialCollapsed);

    const toggle = useCallback(() => setCollapsed((c) => !c), []);

    if (!comments || comments.length === 0) return <div>Нет комментариев</div>;

    return (
      <div className="comment-list">
        <button className={styles.commentBtn} onClick={toggle}>
          {collapsed ? `Показать ${comments.length} комментария` : "Скрыть"}
        </button>
        {!collapsed && (
          <ul>
            {comments.map((c) => (
              <li key={c.id}>
                <strong>{c.author}</strong>: {c.text}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
);

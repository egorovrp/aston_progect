import { type FC } from "react";
import styles from "./PostLengthFilter.module.css";

type Props = {
  onChange: (min?: number, max?: number) => void;
  valueMin?: number;
  valueMax?: number;
};

export const PostLengthFilter: FC<Props> = ({
  onChange,
  valueMin,
  valueMax,
}) => {
  return (
    <div className={styles.postLengthFilter}>
      <input
        type="number"
        placeholder="Минимальная длинна поста"
        value={valueMin ?? ""}
        onChange={(e) =>
          onChange(
            e.target.value ? Number(e.target.value) : undefined,
            valueMax
          )
        }
      />
      <input
        type="number"
        placeholder="Максимальная длинна поста"
        value={valueMax ?? ""}
        onChange={(e) =>
          onChange(
            valueMin,
            e.target.value ? Number(e.target.value) : undefined
          )
        }
      />
    </div>
  );
};

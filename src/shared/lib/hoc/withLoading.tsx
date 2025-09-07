import { type ComponentType, type FC } from "react";
import styles from "./withLoading.module.css";

type WithLoadingProps = { isLoading: boolean };

export function withLoading<P extends object>(Wrapped: ComponentType<P>) {
  const ComponentWithLoading: FC<P & WithLoadingProps> = ({
    isLoading,
    ...props
  }) => {
    if (isLoading) {
      return <div className={styles.loader}>Загрузка...</div>;
    }
    return <Wrapped {...(props as P)} />;
  };
  return ComponentWithLoading;
}

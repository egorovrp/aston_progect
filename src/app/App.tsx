import { type FC } from "react";
import { AppRouter } from "./providers/router/AppRouter";
import { ThemeProvider } from "../shared/lib/theme/ThemeProvider";
import { MainLayout } from "../shared/layouts/MainLayout";

export const App: FC = () => {
  return (
    <ThemeProvider>
      <MainLayout>
        <AppRouter />
      </MainLayout>
    </ThemeProvider>
  );
};

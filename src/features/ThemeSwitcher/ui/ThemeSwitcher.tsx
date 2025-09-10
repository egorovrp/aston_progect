import React from "react";
import { Button } from "../../../shared/ui/button/Button";
import { useTheme } from "../../../shared/lib/theme/ThemeProvider";

export const ThemeSwitcher: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button onClick={toggleTheme} aria-label="Toggle theme" type="button">
      {theme === "light" ? "Switch to dark" : "Switch to light"}
    </Button>
  );
};

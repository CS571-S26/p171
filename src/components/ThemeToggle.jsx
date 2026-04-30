import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";

export default function ThemeToggle() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-bs-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  function toggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <Button
      variant={theme === "light" ? "outline-light" : "outline-warning"}
      size="sm"
      className="rounded-circle"
      onClick={toggleTheme}
      style={{ width: "36px", height: "36px", padding: 0 }}
    >
      {theme === "light" ? "🌙" : "☀️"}
    </Button>
  );
}
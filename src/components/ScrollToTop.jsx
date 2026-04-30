import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setVisible(window.scrollY > 300);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  if (!visible) return null;

  return (
    <Button
      variant="dark"
      onClick={scrollToTop}
      className="rounded-circle shadow"
      style={{
        position: "fixed",
        bottom: "30px",
        right: "30px",
        width: "50px",
        height: "50px",
        padding: 0,
        fontSize: "20px",
        zIndex: 1000,
      }}
      aria-label="Scroll to top"
    >
      ↑
    </Button>
  );
}
import { useState, useEffect } from "react";

const PHRASES = [
  "CS student",
  "AI enthusiast", 
  "incoming Microsoft intern",
  "React developer",
  "problem solver",
];

export default function TypingAnimation() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = PHRASES[phraseIndex];

    const timeout = setTimeout(() => {
      if (!deleting) {
        // typing
        setDisplayed(current.slice(0, displayed.length + 1));
        if (displayed.length + 1 === current.length) {
          setTimeout(() => setDeleting(true), 1500); // pause before deleting
        }
      } else {
        // deleting
        setDisplayed(current.slice(0, displayed.length - 1));
        if (displayed.length - 1 === 0) {
          setDeleting(false);
          setPhraseIndex((phraseIndex + 1) % PHRASES.length);
        }
      }
    }, deleting ? 40 : 80); // delete faster than typing

    return () => clearTimeout(timeout);
  }, [displayed, deleting, phraseIndex]);

  return (
    <span>
      {displayed}
      <span style={{ borderRight: "2px solid", marginLeft: "2px", animation: "blink 0.7s step-end infinite" }} />
      <style>{`@keyframes blink { 0%,100% { opacity: 1 } 50% { opacity: 0 } }`}</style>
    </span>
  );
}
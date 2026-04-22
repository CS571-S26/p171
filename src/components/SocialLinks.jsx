import { Button, Container } from "react-bootstrap";

export default function SocialLinks() {
  return (
    <footer className="bg-dark py-4 mt-5">
      <Container className="text-center">
        <p className="text-secondary mb-3" style={{ fontSize: "14px" }}>
          Let's connect!
        </p>
        <div className="d-flex justify-content-center gap-2 mb-3">
          <a href="https://github.com/evacado0" target="_blank" rel="noreferrer">
            <Button variant="outline-light" size="sm" className="rounded-pill">GitHub</Button>
          </a>
          <a href="https://www.linkedin.com/in/eva-skarabot" target="_blank" rel="noreferrer">
            <Button variant="outline-light" size="sm" className="rounded-pill">LinkedIn</Button>
          </a>
          <a href="mailto:eva.skarabot@gmail.com">
            <Button variant="outline-light" size="sm" className="rounded-pill">Email</Button>
          </a>
        </div>
        <p className="text-secondary mb-0" style={{ fontSize: "12px" }}>
          © 2026 Eva Skarabot
        </p>
      </Container>
    </footer>
  );
}
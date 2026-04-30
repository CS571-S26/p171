import { Container, Row, Col, Card } from "react-bootstrap";
import Chatbot from "../components/Chatbot"; 
import TypingAnimation from "../components/TypingAnimation";
import GitHubActivity from "../components/GitHubActivity";
import { Button } from "react-bootstrap";

export default function Home() {
  return (
    <Container style={{ padding: "40px" }}>
      
{/* HERO SECTION */}
<Row className="text-center mb-5 align-items-center hero-card" style={{
  borderRadius: "20px",
  padding: "60px 30px",
  marginTop: "20px",
}}>
  <Col md={4}>
    <img
      src="/p171/eva-photo.jpeg"
      alt="Eva Skarabot"
      style={{
        width: "200px",
        height: "200px",
        borderRadius: "50%",
        objectFit: "cover",
        border: "4px solid white",
        boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
      }}
    />
  </Col>
  <Col md={8}>
    <h1 style={{ fontSize: "3.5rem", fontWeight: "700", marginBottom: "1rem" }}>
      Hi, I'm Eva 👋
    </h1>
    <p style={{ fontSize: "1.3rem", marginBottom: "1.5rem" }}>
      I'm a <strong><TypingAnimation /></strong>
      <br />
      interested in AI, design, and building impactful technology.
    </p>
    <a href="/p171/Eva_Skarabot_Resume2026.pdf" download>
      <Button variant="light" size="lg" className="rounded-pill px-4">
        Download Resume
      </Button>
    </a>
  </Col>
</Row>

      {/* NAVIGATION GUIDE */}
      <Row className="mb-5">
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>About</Card.Title>
              <Card.Text>Learn more about my experience, education, and background.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Projects</Card.Title>
              <Card.Text>Explore the projects I've built using React and other technologies.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Blog</Card.Title>
              <Card.Text>Read my thoughts, ideas, and reflections on tech and learning.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* GITHUB ACTIVITY */}
      <Row className="mb-5">
        <Col>
          <GitHubActivity username="evacado0" />
        </Col>
      </Row>

      {/* CHATBOT */}
      <Row>
        <Col>
          <h2 className="text-center mb-3">Ask Me Anything</h2>
          <Chatbot />
        </Col>
      </Row>

    </Container>
  );
}
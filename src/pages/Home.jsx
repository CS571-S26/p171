import { Container, Row, Col, Button, Card } from "react-bootstrap";

export default function Home() {
  return (
    <Container style={{ padding: "40px" }}>
      
      {/* HERO SECTION */}
      <Row className="text-center mb-5">
        <Col>
          <h1>Hi, I’m Eva 👋</h1>
          <p>
            I’m a Computer Science student interested in AI, design, and building
            impactful technology.
          </p>
        </Col>
      </Row>

      {/* NAVIGATION GUIDE */}
      <Row className="mb-5">
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>About</Card.Title>
              <Card.Text>
                Learn more about my experience, education, and background.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Projects</Card.Title>
              <Card.Text>
                Explore the projects I’ve built using React and other technologies.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Blog</Card.Title>
              <Card.Text>
                Read my thoughts, ideas, and reflections on tech and learning.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* INTERACTIVE FEATURE */}
      <Row className="text-center">
        <Col>
          <h3>Schedule a Call</h3>
          <p>Want to connect? Book a time with me!</p>

          <Button
            variant="primary"
            onClick={() => alert("Calendar feature coming soon!")}
          >
            Book a Time
          </Button>
        </Col>
      </Row>

    </Container>
  );
}
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function ProjectCard({ project }) {
  return (
    <Card style={{ width: "18rem", margin: "1rem" }}>
      <Card.Img
        variant="top"
        src={project.images ? project.images[0] : ""}
        alt={`Screenshot of ${project.title}`}
      />
      <Card.Body>
        <Card.Title>{project.title}</Card.Title>
        <Card.Text>{project.shortDescription}</Card.Text>

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Link to={`/projects/${project.id}`}>
            <Button variant="primary">View Details</Button>
          </Link>

          {project.link && (
            <Button
              variant="outline-primary"
              onClick={() => window.open(project.link, "_blank")}
            >
              View Live
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
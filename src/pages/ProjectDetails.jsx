import { useParams, Link } from "react-router-dom";
import { Container, Button, Carousel, Badge } from "react-bootstrap";
import projectsData from "../data/projects";

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projectsData.find(p => p.id === id);

  if (!project) {
    return (
      <Container className="py-5 text-center">
        <h2>Project not found</h2>
        <Link to="/projects"><Button variant="primary">Back to Projects</Button></Link>
      </Container>
    );
  }

  return (
    <Container className="py-5" style={{ maxWidth: "900px" }}>
      <Link to="/projects" className="text-decoration-none mb-4 d-inline-block">
        ← Back to Projects
      </Link>

      <h1 className="mb-3">{project.title}</h1>

      <div className="mb-4">
        {project.categories.map(cat => (
          <Badge key={cat} bg="secondary" className="me-2">{cat}</Badge>
        ))}
      </div>

      {project.images && project.images.length > 1 ? (
        <Carousel className="mb-4">
          {project.images.map((img, idx) => (
            <Carousel.Item key={idx}>
              <img src={img} alt={`${project.title} ${idx + 1}`} className="d-block w-100 rounded" />
            </Carousel.Item>
          ))}
        </Carousel>
      ) : (
        <img src={project.images[0]} alt={project.title} className="img-fluid rounded mb-4" />
      )}

      <h4>About this project</h4>
      <p style={{ fontSize: "1.1rem", lineHeight: "1.8" }}>{project.longDescription}</p>

      <h4 className="mt-4">Tech Stack</h4>
      <div className="mb-4">
        {project.techStack.map(tech => (
          <Badge key={tech} bg="primary" className="me-2 mb-2" style={{ fontSize: "0.95rem", padding: "8px 12px" }}>
            {tech}
          </Badge>
        ))}
      </div>

      {project.link && (
        <Button variant="primary" size="lg" onClick={() => window.open(project.link, "_blank")}>
          View Live Project →
        </Button>
      )}
    </Container>
  );
}
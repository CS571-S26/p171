import { useState } from "react";
import { Button, Carousel, Card } from "react-bootstrap";

export default function ProjectCard({ project }) {
  const [showMore, setShowMore] = useState(false);

  function handleToggle() {
    setShowMore(!showMore);
  }

  return (
    <Card style={{ width: "18rem", margin: "1rem" }}>
      {/* IMAGE AREA */}
      {!showMore ? (
        <Card.Img
          variant="top"
          src={project.images ? project.images[0] : ""}
          alt={`Screenshot of ${project.title}`}
        />
      ) : project.images && project.images.length > 1 ? (
        <Carousel>
          {project.images.map((imgUrl, idx) => (
            <Carousel.Item key={idx}>
              <img
                src={imgUrl}
                alt={`Screenshot of ${project.title}`}
                className="d-block w-100"
              />
            </Carousel.Item>
          ))}
        </Carousel>
      ) : (
        <Card.Img
          variant="top"
          src={project.images ? project.images[0] : ""}
          alt={`Screenshot of ${project.title}`}
        />
      )}

      <Card.Body>
        <Card.Title>{project.title}</Card.Title>
        <Card.Text>
          {showMore ? project.longDescription : project.shortDescription}
        </Card.Text>

        {showMore && project.techStack && (
          <p>
            <strong>Tech Stack:</strong> {project.techStack.join(", ")}
          </p>
        )}

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Button variant="primary" onClick={handleToggle}>
            {showMore ? "Show Less" : "Show More"}
          </Button>

          {project.link && (
            <Button
              variant="success"
              onClick={() => window.open(project.link, "_blank")}
            >
              View
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
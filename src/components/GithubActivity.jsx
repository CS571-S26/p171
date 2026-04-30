import { Card } from "react-bootstrap";

export default function GitHubActivity({ username = "evacado0" }) {
  return (
    <Card className="my-4">
      <Card.Body>
        <Card.Title>GitHub Activity</Card.Title>
        <Card.Subtitle className="mb-3 text-muted">
          My contributions over the past year
        </Card.Subtitle>
        <div style={{ overflowX: "auto", textAlign: "center" }}>
          <img
            src={`https://ghchart.rshah.org/${username}`}
            alt="GitHub contribution chart"
            style={{ width: "100%", maxWidth: "100%" }}
          />
        </div>
        <div className="text-center mt-3">
{/*           
          <a>  href={`https://github.com/${username}`}
            target="_blank"
            rel="noreferrer"
            View full profile on GitHub
          </a> */}
        </div>
      </Card.Body>
    </Card>
  );
}
import { Card } from "react-bootstrap";

export default function About() {
  const timelineData = [
    {
      date: "Summer 2026",
      title: "Microsoft",
      subtitle: "Explore Intern",
      description:
        "Incoming Software Engineering and Project Management Intern",
      
    },
    {
      date: "Summer 2025",
      title: "Kode With Klossy",
      subtitle: "Instructor Assisstant",
      description:
        "Taught core Python and AI/ML concepts such as algorithms, datasets, and neural networks in Google Colab to 30+ students. Mentored student teams in building mission-driven chatbots using Python, Hugging Face, and Retrieval-Augmented Generation (RAG), guiding projects from ideation to deployment to a public showcase at the Apple Fifth Avenue store. Led community-building activities, culture of technology discussions, coding practice sessions, and camp logistics",
    },
    {
      date: "Summer 2025",
      title: "CodePath",
      subtitle: "Student",
      description:
        "Completed the Technical Interview Prep 102 course. Participated in lessons and collaborative problem-solving, practicing topics in data structures and algorithm",
    },
    {
      date: "Fall 2024",
      title: "University of Wisconsin-Madison",
      subtitle: "Student",
      description:
        "Majoring in Computer Science and Economics",
    },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1>About Me</h1>

      {/* Timeline container */}
      <div
        style={{
          borderLeft: "3px solid gray",
          marginLeft: "40px",
          paddingLeft: "20px",
        }}
      >
        {timelineData.map((item, index) => (
          <div
            key={index}
            style={{
              marginBottom: "30px",
              display: "flex",
              alignItems: "center",
            }}
          >
            {/* Date */}
            <div style={{ width: "100px", fontWeight: "bold" }}>
              {item.date}
            </div>

            {/* Card */}
            <Card style={{ flex: 1 }}>
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {item.subtitle}
                </Card.Subtitle>

                <Card.Text>{item.description}</Card.Text>

                {item.link && (
                  <a href={item.link}>View Project</a>
                )}
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
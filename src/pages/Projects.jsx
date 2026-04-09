import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  const projects = [
    {
        title: "Portfolio Website",
        shortDescription: "A portfolio site built with React and Bootstrap.",
        longDescription:
          "This site uses React, React Router, and React Bootstrap. Includes a navbar, multiple pages, and a responsive Projects page with show more/less cards.",
        techStack: ["React", "Bootstrap", "Vite", "Javascript"],
        images: [
          "https://via.placeholder.com/300x200.png?text=Personal+Website+1",
          "https://via.placeholder.com/300x200.png?text=Personal+Website+2",
        ],
        link: "https://cs571-s26.github.io/p171/",
      },
    {
      title: "Green Guide",
      shortDescription: "Technical Skills: Python, HuggingFace, HTML, CSS",
      longDescription:
        "Full scholarship as an AI/ML Scholar, developing an AI chatbot that gives environmentally friendly travel tips Developed in 3 days, created wireframes, assigned tasks, and pitched to software engineers and managers.",
      techStack: ["Python", "HuggingFace", "HTML", "CSS"],
      images: [
        "https://via.placeholder.com/300x200.png?text=Personal+Website+1",
        "https://via.placeholder.com/300x200.png?text=Personal+Website+2",
      ],
      link: "https://huggingface.co/spaces/GreenGuide/GreenGuide_2/tree/main",
    },
    {
      title: "Handwriting OCR",
      shortDescription: "Technical Skills: Python, Django, Tesseract",
      longDescription:
        "Created a platform where users can upload pictures of their handwriting and the app will turn it into typed text using a trained model of Tesseract",
      techStack: ["Python", "Django", "Tesseract"],
      images: ["https://via.placeholder.com/300x200.png?text=Skincare+App"],
      link: "https://github.com/HuiWenWeng/handwriting-converter",
    },
    // Add more projects here
  ];

  return (
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
      {projects.map((proj, idx) => (
        <ProjectCard key={idx} project={proj} />
      ))}
    </div>
  );
}